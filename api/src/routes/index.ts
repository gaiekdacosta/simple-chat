import { Router, Request, Response } from 'express';
import GeminiChat from '../controller/geminiController'; // Importe a função GeminiChat do controlador

const routes = Router();

routes.post('/geminiChat', async (req: Request, res: Response) => { 
    await GeminiChat(req, res); // Passe os objetos de solicitação e resposta para GeminiChat
});

export default routes;
