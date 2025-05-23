// import express from 'express';
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/config.json');
const routes = require('./routes/index.js');

// const connect = await dbConnect();
// connect.on("error", (error) => {
//     console.error("erro de conexão", error);
// });

// connect.once("open", () => {
//     console.log("Conexão com o banco de dados feita com sucesso");
// });

const app = express();
routes(app);
module.exports = app;