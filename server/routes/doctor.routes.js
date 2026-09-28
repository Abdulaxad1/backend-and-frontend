import { Router } from 'express';
import { DoctorController as c } from '../controllers/doctor.controller.js';
import { validateCreate, validateUpdate } from '../validations/doctor.validation.js';

export const doctorRoutes = Router();

doctorRoutes.get('/', c.list);
doctorRoutes.post('/', validateCreate, c.create);
doctorRoutes.put('/:id', validateUpdate, c.update);
doctorRoutes.delete('/:id', c.remove);
