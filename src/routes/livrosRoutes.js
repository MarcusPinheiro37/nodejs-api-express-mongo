import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get("/livros", LivroController.listaLivros);

routes.get("/livros/busca", LivroController.listarLivrosEditora)

routes.get("/livros/:id", LivroController.buscaLivro)

routes.post("/livros", LivroController.adicionaLivros);

routes.put("/livros/:id", LivroController.atualizaLivro)

routes.delete("/livros/:id", LivroController.deletaLivro)

export default routes;