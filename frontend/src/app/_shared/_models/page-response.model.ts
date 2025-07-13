export interface PageResponse<T> {
  entries: T[];
  total: number;
  pageSize: number;
}
