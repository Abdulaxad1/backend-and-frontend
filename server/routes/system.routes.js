import { Router } from 'express';
import { SystemController as c } from '../controllers/system.controller.js';
import { requireAdmin } from '../middleware/auth.middleware.js';

export const systemRoutes = Router();

systemRoutes.get('/stats', c.stats);
systemRoutes.get('/logs', c.logs);
systemRoutes.post('/seed', requireAdmin, c.seed); // bazani tiklash - faqat admin
