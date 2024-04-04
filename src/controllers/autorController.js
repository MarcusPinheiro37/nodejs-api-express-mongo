import { autor } from '../models/Autor.js'

class AutorController {

    static async listaAutores(req, res){
        try{ 
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (err){
            res.status(500).json({ message: `${err.message} - falha ao listar autores` });
        }
    };

    static async adicionaAutores(req, res){
        try {
            const novoAutor = await autor.create(req.body);

            res.status(201).json({ message: 'Inserido com sucesso', autor: novoAutor });
        
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar autor` });
        }
    };

    static async buscaAutor(req, res){
        try {
            const listaAutor = await autor.findById(req.params.id);
            res.status(200).json(listaAutor)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao pesquisar autor` });
        }
    }

    static async atualizaAutor(req, res){
        try {
            const atualizaAutor = await autor.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
            res.status(200).json({ message: 'Atualizado com sucesso', autor: atualizaAutor })
        } catch (err) {
            res.status(500).json({ message :  `${err.message} - falha ao atualizar autor`})
        }
    }

    static async deletaAutor(req, res){
        try {
            const deletaAutor = await autor.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: 'Excluído com sucesso', autor: deletaAutor })
        } catch (err) {
            res.status(500).json({ message :  `${err.message} - falha ao deletar autor`})
        }
    }

};

export default AutorController;
