export type Query = Record<string, unknown>;

export type Id = string | number;

export interface Repository<T = unknown> {
  create(data: T, query?: Query): Promise<T>;
  get(id: Id, query?: Query): Promise<T>;
  all(query?: Query): Promise<Array<T>>;
  patch(data: T, query?: Query): Promise<T>;
  delete(id: Id, query?: Query): Promise<T>;
}
