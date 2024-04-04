import 'dotenv/config';
import chalk from 'chalk';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(chalk.yellow(`servidor escutando na porta ${PORT}`));
});