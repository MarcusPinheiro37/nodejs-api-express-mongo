import express from 'express';
import cors from 'cors';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app) => {
    // Aqui estamos usando o middleware cors
    // Esta configuração irá permitir qualquer domínio. Para produção, você deve restringir isso!
    app.use(cors());

    app.route('/').get((req, res) => res.status(200).send('Curso Node JS'));

    // É importante que o middleware json e as rotas sejam usados depois do middleware cors
    app.use(express.json(), livros, autores);
};

export default routes;
