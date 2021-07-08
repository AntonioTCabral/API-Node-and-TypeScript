import {Router} from 'express';
import OrphanegesController from './controllers/OrphanegesController';

const routes= Router();

routes.post('/orphaneges' , OrphanegesController.create);
    

export default routes;