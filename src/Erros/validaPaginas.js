/* eslint-disable no-undef */
// valorValidator.js
// export default function validaValor(min, max, msgInt = `${valor} não é do tipo inteiro.`, msgBtwn = `O valor ${valor} deve estar entre 5 e 10000.`) {
//     return function(valor) {
//         if (!Number.isInteger(valor)) {
//             throw new Error(msgInt);
//         }
//         if (valor < min || valor > max) {
//             throw new Error(msgBtwn);
//         }
//         return true;
//     };
// }

export default function validaValor(min, max, msgInt = 'O valor ${valor} deve ser do tipo inteiro', msgBtwn = 'O valor ${valor} deve estar entre 5 e 10000.') {
    // Retorna uma função que o Mongoose vai chamar para validar um valor específico
    return function(valor) {
        // Mongoose passa 'valor', que é o valor do campo 'paginas' para esta função
        
        if (!Number.isInteger(valor)) {
            throw new Error(msgInt.replace('${valor}', valor)); // Substitui ${valor} na mensagem
        }
        if (valor < min || valor > max) {
            throw new Error(msgBtwn.replace('${valor}', valor)); // Substitui ${valor} na mensagem
        }
        return true;
    };
}
