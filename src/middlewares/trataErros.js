import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function manipulaErros(err, req, res, next) {
    console.error(err);

    if (err instanceof mongoose.Error.CastError){
        res.status(400).send({ message: 'Um ou mais dados fornecidos estão incorreto.' });
    } else if(err instanceof mongoose.Error.ValidationError) {
        const mensagensErros = Object.values(err.errors).map(error => error.message).join('; ');
        res.status(400).json({ message: `Erro, ${mensagensErros}`});
    } else {
        res.status(500).json({ message: 'Erro interno do servidor' });
    }    
}