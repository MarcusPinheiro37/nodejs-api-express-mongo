import ErrBase from './ErroBase.js';

export default class RequisicaoIncorreta extends ErrBase {
    constructor(message = 'Um ou mais dados fornecidos estão incorretos') {
        super(message, 400);
    }
}