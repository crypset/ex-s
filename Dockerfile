FROM node

WORKDIR /ex-s

COPY . .

RUN npm install

ENV PORT=4444

EXPOSE $PORT

CMD ["node", "index.js"]