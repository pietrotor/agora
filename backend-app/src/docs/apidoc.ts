import { createContact, createContactBody, getContacts } from './contact';

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Agora REST API - Documentation',
    description: '',
    contact: {
      name: 'Pietro Torrico',
      email: 'torricopietro@gmail.com',
      url: 'https://devwebsite.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:4000/',
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Contacts',
    },
  ],
  paths: {
    contacts: {
      post: createContact,
      get: getContacts,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      createContactBody,
    },
  },
};

export { apiDocumentation };
