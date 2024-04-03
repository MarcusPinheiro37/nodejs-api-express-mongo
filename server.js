import chalk from 'chalk';
import { log } from 'console';
import app from './src/app.js'

const PORT = 3000

app.listen(PORT, () => {
    log(chalk.green(`servidor tá on na porta ${PORT}`))
})