import express from "express";
import SalmoController from "../controllers/salmoController.js";

const routes = express.Router();

routes.get("/salmos", SalmoController.listarSalmos); //colocar o paginar

export default routes;