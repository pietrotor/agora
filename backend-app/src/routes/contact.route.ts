import { Router } from 'express';
import { ContactController } from 'controllers';
import { validateRequest } from '@/middlewares/validate-request';
import { body, check } from 'express-validator';

const contactRoute = () => {
  const router = Router();
  const contactController = new ContactController();

  router.post(
    '/contacts',
    [
      body('name').notEmpty().withMessage('name is required'),
      body('lastName').trim().notEmpty().withMessage('lastName is required'),
      body('email').trim().notEmpty().withMessage('email is required'),
      body('business').trim().notEmpty().withMessage('business is required'),
      body('profession').trim().notEmpty().withMessage('profession is required'),
      body('country').trim().notEmpty().withMessage('country is required'),
    ],
    validateRequest,
    contactController.create,
  );

  router.get(
    '/contacts',
    [
      check('page').optional().isNumeric().withMessage('page must be a number'),
      check('rows').optional().isNumeric().withMessage('rows must be a number'),
      check('filter').optional(),
    ],
    validateRequest,
    contactController.getContacts,
  );

  return router;
};

export { contactRoute };
