FROM node:12.9.1-alpine AS build
WORKDIR /usr/src/node_app
ENV NODE_ENV=production
ENV PATH /usr/src/node_app/node_modules/.bin:$PATH
COPY package.json /usr/src/node_app/package.json
RUN npm install --silent
COPY . /usr/src/node_app
RUN npm run postinstall

FROM ruby:2.5.1-alpine
RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata
ARG DATABASE_URL="postgres://postgres@db"
ARG RAILS_MASTER_KEY=1
ARG SECRET_KEY_BASE=secret
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_ENV=production
WORKDIR /my_app
COPY Gemfile /my_app/Gemfile
COPY Gemfile.lock /my_app/Gemfile.lock
RUN gem install bundler && bundle install
COPY . /my_app
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/
RUN bundle exec rails assets:precompile
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
EXPOSE 3000
CMD ["rails","server","-b","0.0.0.0"]