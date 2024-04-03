import mongoose, {mongo} from 'mongoose'
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { log } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'dadosConexao.json');

function readJsonFileSync() {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
const dadosLogin = readJsonFileSync();


export default async function conectaDataBase() {
    mongoose.connect(`mongodb+srv://${dadosLogin.login}:${dadosLogin.pass}@bancolivraria.ldx9fmt.mongodb.net/livrariaNode?retryWrites=true&w=majority&appName=bancoLivraria`)
    return mongoose.connection;
} 