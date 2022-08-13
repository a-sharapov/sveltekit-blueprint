FROM node:18-alpine
ENV NODE_ENV development
ENV APP_ROOT /usr/svelteapp
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT
ADD package.json .
RUN npm install && npm run check
ADD . .
RUN sleep 1
RUN npm run build
