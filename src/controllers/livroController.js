import NaoEncontrado from '../Erros/Erro404.js';
import livros from '../models/Livro.js';

class LivroController {

    static listaLivros = async (req, res, next) => {
        try {
            const livrosResultado = await livros.find()
                .populate('autor')
                .exec();

            res.status(200).json(livrosResultado);
        } catch (erro) {
            next(erro);
        }
    };

    static buscaLivro = async (req, res, next) => {
        try {
            const id = req.params.id;

            const livroResultados = await livros.findById(id)
                .populate('autor', 'nome')
                .exec();
            if(livroResultados !== null){
                res.status(200).send(livroResultados);
            } else{
                next(new NaoEncontrado('ID do livro não encontrado.'));
            }
        } catch (erro) {
            next(erro);
        }
    };

    static adicionaLivros = async (req, res, next) => {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save();

            res.status(201).send(livroResultado.toJSON());
        } catch (erro) {
            next(erro);
        }
    };

    static atualizaLivro = async (req, res, next) => {
        try {
            const id = req.params.id;
            const atualizaLivro = await livros.findByIdAndUpdate(id, {$set: req.body}, {returnDocument: 'after'});
            if(atualizaLivro !== null){
                res.status(200).send({message: 'Livro atualizado com sucesso: ', atualizaLivro});
            } else{
                next(new NaoEncontrado('ID do livro não encontrado.'));
            }
        } catch (erro) {
            next(erro);
        }
    };

    static deletaLivro = async (req, res, next) => {
        try {
            const id = req.params.id;

            const deletaLivro = await livros.findByIdAndDelete(id);
            if(deletaLivro !== null){
                res.status(200).send({message: 'Livro removido com sucesso:', deletaLivro});
            } else{
                next(new NaoEncontrado('ID do livro não encontrado.'));
            }
        } catch (erro) {
            next(erro);
        }
    };

    static listarLivrosEditora = async (req, res, next) => {
        try {
            const editora = req.query.editora;

            const livrosResultado = await livros.find({'editora': editora});
            if(livrosResultado.length){
                console.log(livrosResultado);
                res.status(200).send(livrosResultado);
            } else{
                next(new NaoEncontrado('Editora não encontrada'));
            }
        } catch (erro) {
            next(erro);
        }
    };

}

export default LivroController;