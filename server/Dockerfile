FROM ruby:3.1.1-alpine

ARG BUILD_PACKAGES="build-base postgresql-dev"

ENV RAILS_ENV=production
ENV RUBY_DIR=/app/
ENV BUNDLE_PATH="vendor/bundle"

WORKDIR $RUBY_DIR

COPY Gemfile* $RUBY_DIR

RUN    apk update \
    && apk add --no-cache --update $BUILD_PACKAGES \
    && bundle config --global frozen 1 \
    && bundle config set --local deployment 'true' \
    && bundle install --quiet \
    && rm -rf $GEM_HOME/cache/*

COPY . $RUBY_DIR

EXPOSE 3000
COPY entrypoint.sh $RUBY_DIR
ENTRYPOINT ["./entrypoint.sh"]
