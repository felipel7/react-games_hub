FROM node:bullseye
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 5173
CMD ["yarn", "dev", "--host", "0.0.0.0"]