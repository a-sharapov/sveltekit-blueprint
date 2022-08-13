FROM node:18-alpine
ENV APP_ROOT /usr/svelteapp
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT
ADD package.json .
RUN npm install
RUN sleep 3
ADD . .
EXPOSE $VITE_APP_PORT
#CMD ["npm", "run", "dev", "--", "--port", "$VITE_APP_PORT", "--host"]
