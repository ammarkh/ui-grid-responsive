import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NzPageHeaderModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
