const JsonRefs = require('json-refs');
const YAML = require('js-yaml');
const fs = require('fs');
const linebyline = require('linebyline');
const pkg = require('./package.json');

const APP_SPEC_SRC_PATH = './src/index.yaml';
const GEN_SPEC_DEST_PATH = './dist/spec.yaml';

function templatize(str, ctx) {
  with (ctx) {
    return eval('`' + str + '`');
  }
}

const options = {
  loaderOptions: {
    processContent: function (content, cb) {
      cb(null, YAML.safeLoad(templatize(content.text, process.env)));
    }
  },
  filter       : ['relative', 'remote']
};

async function run() {
  const results = await JsonRefs.resolveRefsAt(APP_SPEC_SRC_PATH, options);
  let result = results.resolved;
  result.info.version = pkg.version;
  fs.writeFileSync(GEN_SPEC_DEST_PATH, YAML.safeDump(result, {noCompatMode: true}));
  const rl = linebyline(APP_SPEC_SRC_PATH);
  let currentLine = 0;
  rl.on('line', (line) => {
    currentLine += 1;
    if (line.indexOf('./modules/') != -1) {
      console.error('Error at l.', currentLine);
      console.error(line);
    }
  });
}

try {
  run();
} catch (err) {
  console.error('An error occur during the resolve of app.spec.yaml : ');
  console.error(err.stack);
}