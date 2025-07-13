export interface PaginatedUsers<T> {
  entries: T[];
  total: number;
  pageSize: number;
}
