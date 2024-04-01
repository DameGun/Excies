import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import validate from '../utilities/validators/customValidator.js';
import { registerValidator, loginValidator } from '../utilities/validators/auth.validator.js';

const router = Router();

router.route('/register').post(validate(registerValidator), authController.register);
router.route('/login').post(validate(loginValidator), authController.login);

export default router;