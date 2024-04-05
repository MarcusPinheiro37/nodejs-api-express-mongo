export default class ErrBase extends Error {
    constructor(message = 'Erro interno do servidor', status = 500){
        super();
        this.message = message;
        this.status = status;
    }

    enviarResposta(res){
        res.status(this.status).send({
            status: this.status,
            mensage: this.message
        });
    }
}