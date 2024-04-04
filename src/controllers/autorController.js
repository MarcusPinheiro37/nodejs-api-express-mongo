import autor from '../models/Autor.js';

class AutorController {

    static async listaAutores(req, res, next){
        try{ 
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
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
                res.status(404).send({ message: 'Autor não encontrado' });
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
            res.status(200).json({ message: 'Atualizado com sucesso', autor: atualizaAutor });
        } catch (err) {
            next(err);
        }
    }

    static async deletaAutor(req, res, next){
        try {
            const deletaAutor = await autor.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: 'Excluído com sucesso', autor: deletaAutor });
        } catch (err) {
            next(err);
        }
    }

}

export default AutorController;
