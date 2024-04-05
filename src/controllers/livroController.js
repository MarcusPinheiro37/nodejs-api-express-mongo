import NaoEncontrado from '../Erros/Erro404.js';
import { autor, livros } from '../models/index.js';

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

    static listarLivrosFiltro = async (req, res, next) => {
        try {
            const busca = await processaBusca(req.query);
            console.log(busca);
            if (busca !== null ){
                const livrosResultado = await livros.find(busca).populate('autor');
                
                if(livrosResultado.length){
                    console.log(livrosResultado);
                    res.status(200).json(livrosResultado);
                } else{
                    next(new NaoEncontrado('Livro não encontrado'));
                }
            } else {
                next(new NaoEncontrado('Autor não encontrado'));
            }
        } catch (erro) {
            next(erro);
        }
    };

}
async function processaBusca(parametros){
    const {editora, titulo, minPag, maxPag, nomeAutor} = parametros;
    let busca = {};
    if (editora) busca.editora = { $regex: editora, $options: 'i' };
    if (titulo) busca.titulo = { $regex: titulo, $options: 'i' };
    if (minPag || maxPag) {
        busca.paginas = {};
        if (minPag) busca.paginas.$gte = parseInt(minPag, 10);
        if (maxPag) busca.paginas.$lte = parseInt(maxPag, 10);
    }
    if (nomeAutor){
        const autores = await autor.findOne({ nome: { $regex: nomeAutor, $options: 'i' } });
        if( autores !== null ){
            busca.autor = autores._id;
        } else {
            busca = null;
        }
    }
    return busca;
}

export default LivroController;