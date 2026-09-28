import { Router } from 'express';
import { ServiceController as c } from '../controllers/service.controller.js';
import { validateCreate, validateUpdate } from '../validations/service.validation.js';

export const serviceRoutes = Router();

serviceRoutes.get('/', c.list);
serviceRoutes.post('/', validateCreate, c.create);
serviceRoutes.put('/:id', validateUpdate, c.update);
serviceRoutes.delete('/:id', c.remove);
