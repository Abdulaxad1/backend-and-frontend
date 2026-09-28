import { Router } from 'express';
import { AppointmentController as c } from '../controllers/appointment.controller.js';
import { validateCreate, validateUpdate } from '../validations/appointment.validation.js';

export const appointmentRoutes = Router();

appointmentRoutes.get('/', c.list);
appointmentRoutes.post('/', validateCreate, c.create);
appointmentRoutes.put('/:id', validateUpdate, c.update);
appointmentRoutes.delete('/:id', c.remove);
