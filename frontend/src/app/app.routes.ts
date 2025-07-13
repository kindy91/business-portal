import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-management'
      },
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.routes').then(m => m.userManagementRoutes)
      }
    ],
  },
];
