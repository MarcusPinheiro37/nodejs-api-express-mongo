import NaoEncontrado from '../Erros/Erro404.js';
import { autor } from '../models/index.js';

class AutorController {

    static async listaAutores(req, res, next){
        try{ 
            const listaAutores = autor.find({});
            req.resultado = listaAutores;
            next();
        } catch (err){
            next(err);
        }
    }
    
    static async buscaAutor(req, res, next){
        try {
            const listaAutor = await autor.findById(req.params.id);            
            if(listaAutor !== null){
                res.status(200).json(listaAutor);
            } else {
                next(new NaoEncontrado('ID do autor não encontrado.'));
            }
        } catch (err) {
            next(err);
        }
    }

    static async adicionaAutores(req, res, next){
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: 'Inserido com sucesso', autor: novoAutor });        
        } catch(err) {
            next(err);
        }
    }

    static async atualizaAutor(req, res, next){
        try {
            const atualizaAutor = await autor.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
            if(atualizaAutor !== null){
                res.status(200).json({ message: 'Atualizado com sucesso', atualizaAutor });
            } else {
                next(new NaoEncontrado('ID do autor não encontrado.'));
            }
        } catch (err) {
            next(err);
        }
    }

    static async deletaAutor(req, res, next){
        try {
            const deletaAutor = await autor.findByIdAndDelete(req.params.id, req.body);
            if(deletaAutor !== null){
                res.status(200).json({ message: 'Excluído com sucesso', deletaAutor });
            } else {
                next(new NaoEncontrado('ID do autor não encontrado.'));
            }
        } catch (err) {
            next(err);
        }
    }

}

export default AutorController;
