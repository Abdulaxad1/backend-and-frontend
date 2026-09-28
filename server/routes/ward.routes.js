import { Router } from 'express';
import { WardController as c } from '../controllers/ward.controller.js';
import { validateCreate, validateUpdate, validateAdmit, validateDischarge } from '../validations/ward.validation.js';

export const wardRoutes = Router();

wardRoutes.get('/', c.list);
wardRoutes.post('/', validateCreate, c.create);
wardRoutes.put('/:id', validateUpdate, c.update);
wardRoutes.post('/:id/admit', validateAdmit, c.admit);
wardRoutes.post('/:id/discharge', validateDischarge, c.discharge);
wardRoutes.delete('/:id', c.remove);
