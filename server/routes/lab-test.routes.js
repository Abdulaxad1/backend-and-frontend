import { Router } from 'express';
import { LabTestController as c } from '../controllers/lab-test.controller.js';
import { validateCreate, validateUpdate } from '../validations/lab-test.validation.js';

export const labTestRoutes = Router();

labTestRoutes.get('/', c.list);
labTestRoutes.post('/', validateCreate, c.create);
labTestRoutes.put('/:id', validateUpdate, c.update);
labTestRoutes.delete('/:id', c.remove);
