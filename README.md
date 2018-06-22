# api_specs - [![Build Status](https://travis-ci.org/OnRewind/api_specs.svg?branch=master)](https://travis-ci.org/OnRewind/api_specs)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
On Rewind API specifications (in OpenAPI/Swagger) used in [doc-api.onrewind.tv](http://doc-api.onrewind.tv)
Every updates converts the open api specs into slate markdown and then publish the static website in gh-pages branch.

## Prerequisites

- docker
- node.js >= 8

## Installation

-  clone this project
- `npm install`

## Usage

The following commands are available using `npm run`:

 - `openapi:compile` : compile splited openapi spec files into one
 - `openapi:watch` : open a swagger ui preview in your browser, hot reload enabled if you modify any specs
 - `slate:init` : transpile openapi spec into slate spec and copy slate resources into tmp folder, should be run for any changes
 - `slate:preview`: open a slate preview in your browser, based on content in tmp folder
 - `slate:compile` : compile all files to build a slate static site into dist folder, based on content in tmp folder
 - `docker:init` : build docker image needed for slate
 - `dist` : combine commands to generate openapi spec and static site in one go

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

Thanks to the following projects/organization that helps us to write better documentation :)

* [swagger](https://swagger.io/)
* [widdershins](https://github.com/Mermade/widdershins)
* [docker](https://www.docker.com/)
* [slate](https://github.com/lord/slate)
* and other libraries we are using in this project, defined in `package.json`
