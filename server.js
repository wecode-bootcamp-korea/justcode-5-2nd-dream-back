require('dotenv').config();
const http = require('http');
const cors = require('cors');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const routes = require('./routes');
const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);
const PORT = process.env.PORT || 10010;

const start = async () => {
  // 서버를 시작하는 함수입니다.
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
};

start();
