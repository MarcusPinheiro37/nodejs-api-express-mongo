import chalk from 'chalk';
import { log } from 'console';
import http from 'http';

const PORT = 3000

const rotas = {
    "/": "Curso node.js", // rota base
    "/livros": "Entrei em livros",
    "/autores": "Entrei em autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"}),
    res.end(rotas[req.url])
})

server.listen(PORT, () => {
    log(chalk.green(`servidor tá on na porta ${PORT}`))
})