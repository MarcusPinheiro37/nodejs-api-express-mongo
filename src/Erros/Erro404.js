import ErrBase from './ErroBase.js';

export default class NaoEncontrado extends ErrBase{
    constructor(message = 'Página não encontrada'){
        super(message, 404);
    }
}