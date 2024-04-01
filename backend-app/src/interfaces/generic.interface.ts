export default interface IGeneric {
  status: boolean,
  createdBy: objectId;
  deleted: boolean;
  deletedAt?: Date;
  deletedBy?: objectId;
  createdAt: Date;
}
