# build environment
FROM node:lts-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

ARG REACT_APP_URL_API_SERVER=${REACT_APP_URL_API_SERVER}
ENV REACT_APP_URL_API_SERVER=${REACT_APP_URL_API_SERVER}

ARG REACT_APP_ID_EDAMAM=${REACT_APP_ID_EDAMAM}
ENV REACT_APP_ID_EDAMAM=${REACT_APP_ID_EDAMAM}

ARG REACT_APP_KEY_EDAMAM=${REACT_APP_KEY_EDAMAM}
ENV REACT_APP_KEY_EDAMAM=${REACT_APP_KEY_EDAMAM}

COPY . /usr/src/app
RUN npm install
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
