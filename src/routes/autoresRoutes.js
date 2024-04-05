import express from 'express';
import AutorController from '../controllers/autorController.js';
import paginacaoOrd from '../middlewares/paginacao.js';

const routes = express.Router();

routes.get('/autores', AutorController.listaAutores, paginacaoOrd);

routes.get('/autores/:id', AutorController.buscaAutor);

routes.post('/autores', AutorController.adicionaAutores);

routes.put('/autores/:id', AutorController.atualizaAutor);

routes.delete('/autores/:id', AutorController.deletaAutor);

export default routes;