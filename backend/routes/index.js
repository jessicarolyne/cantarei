import express from 'express';
import salmos from './salmos.js';

const routes = (app) => {
    app.route('/').get((requestAnimationFrame, res) => res.status(200).send("Cheguei pessoal"));
    app.use(express.json(), salmos);
};

export default routes;