import express from 'express';
import chalk from 'chalk';
import conectaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaDataBase()

conexao.on("error", (err) => {
    console.error(chalk.red("Erro de conexão: "), err)
})

conexao.once("open", () => {
    console.log(chalk.green('Conexão com o banco efetuada com sucesso.'));
})

const app = express();
routes(app)

export default app;
