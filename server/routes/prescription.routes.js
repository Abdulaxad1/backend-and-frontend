import { Router } from 'express';
import { PrescriptionController as c } from '../controllers/prescription.controller.js';
import { validateCreate, validateUpdate } from '../validations/prescription.validation.js';

export const prescriptionRoutes = Router();

prescriptionRoutes.get('/', c.list);
prescriptionRoutes.post('/', validateCreate, c.create);
prescriptionRoutes.put('/:id', validateUpdate, c.update);
prescriptionRoutes.delete('/:id', c.remove);
