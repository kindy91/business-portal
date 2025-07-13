import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { TotalPagesPipe } from '../../_shared/_pipes/total-pages.pipe';
import { UserService } from '../_services/user.service';
import { PaginatedUsers } from '../../_shared/_models/paginated-users.model';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, TotalPagesPipe],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  total = 0;
  page = 1;
  pageSize = 5;
  pageSizeOptions: number[] = [5];
  loading = true;
  error: string | null = null;
  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'street',
    'zipcode',
    'role',
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadPage(1);
  }

  loadPage(page: number, pageSize: number = this.pageSize): void {
    this.loading = true;
    this.userService.getAll<User>(page, pageSize).subscribe({
      next: (result: PaginatedUsers<User>) => {
        this.users = result.entries;
        this.total = result.total;
        this.page = page;
        this.pageSize = pageSize;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users.';
        this.loading = false;
      },
    });
  }

  onPageChange(event: PageEvent): void {
    this.loadPage(event.pageIndex + 1, event.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.total / this.pageSize);
  }
}
