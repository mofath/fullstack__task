export interface IObjectKeys {
  [key: string]: any;
}

export type PaginationResult<I> = {
  docs: I[];
  total: number;
  pages: number;
};