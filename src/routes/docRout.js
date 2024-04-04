import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const swaggerDocumentPath = path.join(__dirname, '..', 'documentacao', 'documentacao.yaml');

const routes = express.Router();

const swaggerDocument = yaml.load(swaggerDocumentPath);
swaggerDocument.servers = [{ url: `http://localhost:${PORT}` }];


routes.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default routes;
