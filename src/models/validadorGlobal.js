import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', {
    validator: (valor) => valor.trim() !== '',
    message: ({ path }) => `Não é permitido campos vazios em ${path}`
});