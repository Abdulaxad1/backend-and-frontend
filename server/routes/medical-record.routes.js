import { Router } from 'express';
import { MedicalRecordController as c } from '../controllers/medical-record.controller.js';
import { validateCreate, validateUpdate } from '../validations/medical-record.validation.js';

export const medicalRecordRoutes = Router();

medicalRecordRoutes.get('/', c.list);
medicalRecordRoutes.post('/', validateCreate, c.create);
medicalRecordRoutes.put('/:id', validateUpdate, c.update);
medicalRecordRoutes.delete('/:id', c.remove);
