FROM ruby:2.5-alpine
EXPOSE 4567

RUN apk update \
 && apk add coreutils git make g++ nodejs

RUN git clone https://github.com/lord/slate /slate

RUN cd /slate && bundle install && mkdir override_source

VOLUME /slate/override_source
VOLUME /slate/build

CMD cd /slate && cp -r override_source/* source && exec bundle exec middleman server --watcher-force-polling
