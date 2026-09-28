import { Router } from 'express';
import { InventoryController as c } from '../controllers/inventory.controller.js';
import { validateCreate, validateUpdate } from '../validations/inventory.validation.js';

export const inventoryRoutes = Router();

inventoryRoutes.get('/', c.list);
inventoryRoutes.post('/', validateCreate, c.create);
inventoryRoutes.put('/:id', validateUpdate, c.update);
inventoryRoutes.delete('/:id', c.remove);
