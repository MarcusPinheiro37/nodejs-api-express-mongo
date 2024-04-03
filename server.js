import chalk from 'chalk';
import { log } from 'console';
import http from 'http';

const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"},
    res.end('Curso node.js'))
})

server.listen(PORT, () => {
    log(chalk.green('servidor tá on malucooo'))
})