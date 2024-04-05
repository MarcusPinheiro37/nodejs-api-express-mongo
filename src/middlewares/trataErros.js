import mongoose from 'mongoose';
import ErrBase from '../Erros/ErroBase.js';
import RequisicaoIncorreta from '../Erros/RequisicaoIncorreta.js';
import ErrValidacao from '../Erros/ErroValidacao.js';
import NaoEncontrado from '../Erros/Erro404.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function manipulaErros(err, req, res, next) {
    console.error(err);

    if (err instanceof mongoose.Error.CastError){
        new RequisicaoIncorreta().enviarResposta(res);
    } else if(err instanceof mongoose.Error.ValidationError) {
        new ErrValidacao(err).enviarResposta(res);
    } else if(err instanceof NaoEncontrado){
        err.enviarResposta(res);
    }else {
        new ErrBase().enviarResposta(res);
    }    
}