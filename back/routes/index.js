import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const template = path.join(__dirname, '../build', 'index.html');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.sendFile(template);
});

export default router;
