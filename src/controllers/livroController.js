import livro from '../models/Livro.js'

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
        try {
            const novoLivro = await livro.create(req.body);

            res.status(201).json({ message: 'Inserido com sucesso', livro: novoLivro });
        
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
    }

    static async atualizaLivro(req, res){
        try {
            const atualizaLivro = await livro.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
            res.status(200).json({ message: 'Atualizado com sucesso', livro: atualizaLivro })
        } catch (err) {
            res.status(500).json({ message :  `${err.message} - falha ao atualizar livro`})
        }
    }

    static async deletaLivro(req, res){
        try {
            const deletaLivro = await livro.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: 'Excluído com sucesso', livro: deletaLivro })
        } catch (err) {
            res.status(500).json({ message :  `${err.message} - falha ao deletar livro`})
        }
    }

};

export default LivroController;
