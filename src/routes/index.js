import express from 'express';
import cors from 'cors';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import documentacao from './docRout.js';

const routes = (app) => {
    app.use(cors());

    app.route('/').get((req, res) => res.status(200).send('Curso Node JS'));

    app.use(express.json(), livros, autores, documentacao);
};

export default routes;
