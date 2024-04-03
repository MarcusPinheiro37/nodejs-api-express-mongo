import express from 'express';
import conectaDataBase from './config/dbConnect.js'
import chalk from 'chalk';

const conexao = await conectaDataBase()

conexao.on("error", (err) => {
    console.error(chalk.red("Erro de conexão: "), err)
})

conexao.once("open", () => {
    console.log(chalk.green('Conexão com o banco efetuada com sucesso.'));
})

const app = express();
app.use(express.json());
const livros = [
    {
        id: 1,
        titulo: "A espera de um milagre"
    },
    {
        id: 2,
        titulo: "Percy jackson e o ladrão de raios"
    }
];

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso node.js");

});

app.get("/livros", (req, res) => {
    res.status(200).send(livros)
})

app.get("/livros/:id", (req, res) => { // aqui, um get somente com o id do livro
    const index = buscaLivro(req.params.id);
    res.status(200).send(livros[index])
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send(livros)
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send(livros);
});


export default app;
