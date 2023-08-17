export type Query = Record<string, unknown>;

export type Id = string | number;

export interface Repository<T = unknown> {
  create(data: T, query?: Query): Promise<T>;
  get(id: Id, query?: Query): Promise<T>;
  all(query?: Query): Promise<Array<T>>;
  patch(data: T, query?: Query): Promise<T>;
  delete(id: Id, query?: Query): Promise<T>;
}

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}

export interface User {
  id: string;
  name: string;
  username: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  visible: boolean;
}
