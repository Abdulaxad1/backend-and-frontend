import { Router } from 'express';
import { PatientController as c } from '../controllers/patient.controller.js';
import { validateCreate, validateUpdate } from '../validations/patient.validation.js';

export const patientRoutes = Router();

patientRoutes.get('/', c.list);
patientRoutes.get('/:id', c.getOne);
patientRoutes.post('/', validateCreate, c.create);
patientRoutes.put('/:id', validateUpdate, c.update);
patientRoutes.delete('/:id', c.remove);
