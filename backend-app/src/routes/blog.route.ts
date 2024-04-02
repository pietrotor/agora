import { Router } from 'express';
import { BlogController } from 'controllers';
import { validateRequest } from '@/middlewares/validate-request';
import { check } from 'express-validator';

const blogRoute = () => {
  const router = Router();
  const contactController = new BlogController();

  router.get(
    '/blogs',
    [
      check('page').optional().isNumeric().withMessage('page must be a number'),
      check('rows').optional().isNumeric().withMessage('rows must be a number'),
    ],
    validateRequest,
    contactController.getBlogs,
  );

  return router;
};

export { blogRoute };
