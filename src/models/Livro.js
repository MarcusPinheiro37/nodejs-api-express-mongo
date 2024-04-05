import mongoose from 'mongoose';
import validaValor from '../Erros/validaPaginas.js';
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, 'Título do livro é obrigatório']},
    editora: { 
        type: String,
        enum: {
            values: [ 'Classicos', 'HQs', 'Fudida' ],
            message: 'A editora {VALUE} não é um valor permitido'
        }
    },
    preco: { type: Number },
    paginas: { 
        type: Number,
        validate: 
            {
                validator: validaValor(
                    5, 
                    1000, 
                    'A quantidade de páginas deve ser um número do tipo inteiro. Foi fornecido ${valor}', 
                    'A quantidade de páginas deve estar entre 5 e 10000. Foi fornecido ${valor}'
                ),
                message: 'O número fornecido está incorreto'
            }
        
    },
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, 'ID do autor é obrigatório']},
}, {versionKey: false});

const livro = mongoose.model('livros', livroSchema);

export default livro;