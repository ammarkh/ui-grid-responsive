import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [
    NzCardModule,
    NzDividerModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
  ],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css',
})
export class GridListComponent {
  loanRequestList = [
    {
      id: 1,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 2,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 3,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 3,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 3,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 3,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 3,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 3,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
    {
      id: 3,
      date: '12-02-2024',
      branch: 'Yalboga',
      loanCost: '500$',
      status: 'pending',
    },
  ];

  click(value: any) {}
}
