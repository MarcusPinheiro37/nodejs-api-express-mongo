import mongoose, {mongo} from 'mongoose'
import { readFileSync } from 'fs';

function readJsonFileSync() {
    const data = readFileSync('./dadosConexao.json', 'utf-8');
    return JSON.parse(data);
}
const dadosLogin = readJsonFileSync();


async function conectaDatabase() {
    mongoose.connect(`mongodb+srv://${dadosLogin.login}:${dadosLogin.pass}@bancolivraria.ldx9fmt.mongodb.net/livraria`)
    return mongoose.connection;
} 

export default conectaDatabase()