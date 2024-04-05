import RequisicaoIncorreta from '../Erros/RequisicaoIncorreta.js';

export default async function paginacaoOrd(req, res, next){
    try{
        let { limite = 5, pagina = 1, order = 'titulo:-1'} = req.query;
        let [campoOrd, ord] = order.split(':'); 
        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ord = parseInt(ord);
        console.log(req.resultado);
        const resultado = req.resultado;

        if(limite > 0 && pagina > 0){
            const resultadoPaginado = await resultado.find()
                .sort({ [campoOrd]: ord })
                .skip((pagina - 1) * limite)
                .limit(limite)
                .exec();
            res.status(200).json(resultadoPaginado);
        }else {
            next(new RequisicaoIncorreta());
        }
    } catch(err){
        next(err);
    }

}