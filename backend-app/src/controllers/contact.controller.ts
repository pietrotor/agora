import { NextFunction, Response, Request } from 'express';
import { IRequest } from '../interfaces';
import { ContactDto } from 'dtos';
import { createContact, getContactsPaginated } from 'services';

export class ContactController {
  public create = async (req: IRequest<ContactDto>, res: Response, next: NextFunction) => {
    try {
      const contactDto = req.body;
      const contactInstance = await createContact(contactDto);
      return res.status(200).send(contactInstance);
    } catch (error) {
      console.log('🚀 ~ ContactController ~ create= ~ error:', error);
      next(error);
    }
  };

  public getContacts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const paginationDto = req.query;
      const contactsInstances = await getContactsPaginated(paginationDto);
      return res.status(200).send(contactsInstances);
    } catch (error) {
      console.log('🚀 ~ ContactController ~ getContacts= ~ error:', error);
      next(error);
    }
  };
}
