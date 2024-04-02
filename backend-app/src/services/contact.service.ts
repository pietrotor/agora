import { ContactDto, PaginationDto } from 'dtos';
import { Contact, IContact, IModelContact } from '../models';
import { getInstancesPagination } from './generic.service';

const createContact = async (contact: ContactDto) => {
  const contactInstance = new Contact(contact);
  return await contactInstance.save();
};

const getContactsPaginated = async (paginationDto: PaginationDto) => {
  const { filter } = paginationDto;
  if (filter) {
    const filterArgs = {
      $or: [{ name: { $regex: filter, $options: 'i' } }, { email: { $regex: filter, $options: 'i' } }],
    };
    return await getInstancesPagination<IContact, IModelContact>(Contact, paginationDto, filterArgs);
  }
  return await getInstancesPagination<IContact, IModelContact>(Contact, paginationDto);
};

export { createContact, getContactsPaginated };
