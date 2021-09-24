FROM node:12

ENV PORT 5432
ENV DATABASE smcorporatesite
ENV DB_USER_NAME smcms@pgsql-sm-single-global-prod-001
ENV DB_USER_PASSWORD cmsprod@2020
ENV DB_HOST 52.140.23.221
ENV DB_DIALECT postgres

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]