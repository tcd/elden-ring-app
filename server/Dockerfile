FROM ruby:3.1.1

ENV RAILS_ENV=production
ENV RUBY_DIR=/app/

RUN mkdir $RUBY_DIR
RUN apt-get update -qq && apt-get install -y libpq-dev
RUN bundle config --global frozen 1

WORKDIR $RUBY_DIR

COPY Gemfile* $RUBY_DIR
RUN bundle install
COPY . $RUBY_DIR

EXPOSE 3000
COPY entrypoint.sh $RUBY_DIR
ENTRYPOINT ["./entrypoint.sh"]

# Start the main process.
# CMD ["rails", "server", "-b", "0.0.0.0"]
