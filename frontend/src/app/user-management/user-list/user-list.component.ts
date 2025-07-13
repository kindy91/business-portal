import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
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
    this.userService.getAll().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users.';
        this.loading = false;
      },
    });
  }
}
