import { Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserListComponent } from './user-list/user-list.component';

export const userManagementRoutes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      }
      // Future: add more child routes here
    ]
  }
];
