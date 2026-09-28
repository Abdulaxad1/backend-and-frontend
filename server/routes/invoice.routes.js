import { Router } from 'express';
import { InvoiceController as c } from '../controllers/invoice.controller.js';
import { validateCreate, validateUpdate } from '../validations/invoice.validation.js';

export const invoiceRoutes = Router();

invoiceRoutes.get('/', c.list);
invoiceRoutes.post('/', validateCreate, c.create);
invoiceRoutes.put('/:id', validateUpdate, c.update);
invoiceRoutes.delete('/:id', c.remove);
