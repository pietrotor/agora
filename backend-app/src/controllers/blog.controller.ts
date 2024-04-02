import { NextFunction, Response, Request } from 'express';
import { getBlogs } from 'services';

export class BlogController {
  public getBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const paginationDto = req.query;
      const blogs = await getBlogs(paginationDto);
      return res.status(200).send(blogs);
    } catch (error) {
      console.log('🚀 ~ BlogController ~ getContacts= ~ error:', error);
      next(error);
    }
  };
}
