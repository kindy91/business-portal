import { PaginatedUsers } from '../_models/paginated-users.model';
import { PageResponse } from '../_models/page-response.model';

export function mapPaginatedUsersResponse<T>(
  response: PageResponse<T>
): PaginatedUsers<T> {
  return {
    entries: response.entries,
    total: response.total,
    pageSize: response.pageSize,
  };
}
