import IGeneric from '../interfaces/generic.interface';
import { Document, Model, Schema, model } from 'mongoose';

interface IContact extends Document, IGeneric {
  id: objectId;
  name: string;
  lastName: string;
  email: string;
  business: string;
  profession: string;
  country: string;
}

interface IModelContact extends Model<IContact> {}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'nombre is required'],
      maxlength: [100, 'nombre is too long'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'apellido is required'],
      maxlength: [100, 'apellido is too long'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
    },
    business: {
      type: String,
      required: [true, 'business is required'],
    },
    profession: {
      type: String,
      required: [true, 'business is required'],
    },
    country: {
      type: String,
      required: [true, 'business is required'],
    },
    // Generic Types
    status: { type: Boolean, default: true },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    deleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    deletedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const Contact = model<IContact, IModelContact>('Contact', contactSchema, 'contac');

export { Contact, IModelContact, IContact };
