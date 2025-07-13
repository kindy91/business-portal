import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user.model';
import { PaginatedUsers } from '../../_shared/_models/paginated-users.model';
import { PageResponse } from '../../_shared/_models/page-response.model';
import { mapPaginatedUsersResponse } from '../../_shared/_mappers/paginated-users.mapper';

// PaginatedUsers interface is now shared

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = '/api/user-management';

  constructor(private http: HttpClient) {}

  getAll<T>(
    page: number = 1,
    pageSize: number = 10
  ): Observable<PaginatedUsers<T>> {
    return this.http
      .get<PageResponse<T>>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`)
      .pipe(map(mapPaginatedUsersResponse));
  }
}
