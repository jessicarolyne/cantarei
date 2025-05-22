import express from 'express';
import cors from 'cors';
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';

const connect = await dbConnect();
connect.on("error", (error) => {
    console.error("erro de conexão", error);
});

connect.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso");
});

const app = express();
routes(app);
export default app;