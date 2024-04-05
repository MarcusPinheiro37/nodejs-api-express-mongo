import RequisicaoIncorreta from './RequisicaoIncorreta.js';

export default class ErrValidacao extends RequisicaoIncorreta {
    constructor(err){
        const mensagensErro = Object.values(err.errors)
            .map(error => error.message)
            .join('; ');
        super(`Os seguintes erros ocorreram: ${mensagensErro}`);
    }
}