import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { RequestsComponent } from './pages/components/requests/requests.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'requests',
    component: RequestsComponent,
  },
];
