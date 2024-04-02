export default interface IGeneric {
  status: boolean;
  createdBy: objectId;
  deleted: boolean;
  deletedAt?: Date;
  deletedBy?: objectId;
  createdAt: Date;
}

export interface IPagination {
  page?: number;
  rows?: number;
  filter?: string;
}
