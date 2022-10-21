FROM node:16.13.0-stretch AS build
# создание директории приложения
WORKDIR /app
# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности 
# скопировать оба файла: package.json и package-lock.json
COPY *package*.json ./
COPY .npmrc .
RUN sed -i "s|false|true |g" /app/.npmrc
RUN  echo $(ls)
RUN npm install
# копируем исходный код
COPY ./ .
# RUN npm run build; exit 0
ENV APP_DOCKERMODE 1

RUN sed -i 's/\r$//' /app/entrypoint.sh

RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build 
FROM nginx:stable-alpine as final
COPY --from=build /app/dist /app
COPY --from=build /app/entrypoint.sh /app
#RUN rm /etc/nginx/conf.d/default.conf; exit 0
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["sh", "/app/entrypoint.sh"]
