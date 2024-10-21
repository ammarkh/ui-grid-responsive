import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { GridListComponent } from "../shared/grid-list/grid-list.component";
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [NzPageHeaderModule, NzTypographyModule, GridListComponent, NzButtonModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css',
})
export class RequestsComponent {}
