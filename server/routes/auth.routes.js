import { Router } from 'express';
import { AuthController as c } from '../controllers/auth.controller.js';
import { validateLogin, validateRegister } from '../validations/auth.validation.js';
import { requireAuth } from '../middleware/auth.middleware.js';

export const authRoutes = Router();

authRoutes.post('/login', validateLogin, c.login);
authRoutes.post('/register', validateRegister, c.register);
authRoutes.get('/me', requireAuth, c.me);
authRoutes.post('/logout', requireAuth, c.logout);
