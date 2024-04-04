import { autor } from '../models/Autor.js';
import livro from '../models/Livro.js';

class LivroController {

    static async listaLivros(req, res){
        try{ 
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (err){
            res.status(500).json({ message: `${err.message} - falha ao listar livros` });
        }
    };

    static async adicionaLivros(req, res){
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {
                ...novoLivro, autor: { ...autorEncontrado._doc }
            }
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: 'Inserido com sucesso', livro: livroCriado });
        
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar livro` });
        }
    };

    static async buscaLivro(req, res){
        try {
            const listaLivro = await livro.findById(req.params.id);
            res.status(200).json(listaLivro)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao pesquisar livro` });
        }
    };

    static async atualizaLivro(req, res) {
        const atualizacao = req.body;
        const id = req.params.id;
        try {
            let result = atualizacao;
            
            // Check if `autor` is provided in the update payload.
            if (atualizacao.autor !== undefined) {
                const autorEncontrado = await autor.findById(atualizacao.autor);
                
                // Make sure an author was found before attempting to use it.
                if (autorEncontrado) {
                    result = { ...atualizacao, autor: { ...autorEncontrado._doc } };
                } else {
                    // Handle the case where an author ID is provided but no author is found.
                    return res.status(404).json({ message: 'Autor não encontrado' });
                }
            }
            
            const atualizaLivro = await livro.findByIdAndUpdate(id, result, { returnDocument: 'after' });
            res.status(200).json({ message: 'Atualizado com sucesso', livro: atualizaLivro });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao atualizar livro` });
        }
    };
    

    static async deletaLivro(req, res){
        try {
            const deletaLivro = await livro.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: 'Excluído com sucesso', livro: deletaLivro })
        } catch (err) {
            res.status(500).json({ message :  `${err.message} - falha ao deletar livro`})
        }
    };

    static async listarLivrosEditora(req,res){
        const editora = req.query.editora;
        try {
            const livroPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livroPorEditora)            
        } catch (err) {
            res.status(500).json({ message :  `${err.message} - falha na busca`})
        }
    }

};

export default LivroController;
