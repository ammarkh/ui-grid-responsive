import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzStepsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ui-grid-responsive';

  side!: HTMLElement;
  @ViewChild('sidebar') set sidebarRef(ref: ElementRef<HTMLElement>) {
    this.side = ref.nativeElement;
  }

  // constructor(private configService: NzConfigService) {
  //   this.configService.set('button', { nzSize: 'small' });
  // }
  toggleButton = document.getElementById('toggle-button') as HTMLFormElement;
  sidebar = document.getElementById('sidebar') as HTMLFormElement;

  toggleSidebar() {
    this.side.classList.toggle('close');
    debugger;
    if (this.sidebar != null && this.toggleButton != null) {
      (document.getElementById('sidebar') as HTMLFormElement).classList.toggle(
        'close'
      );
      this.toggleButton.classList.toggle('rotate');
    }

    this.closeAllSubMenus();
  }

  toggleSubMenu(button: any) {
    if (!button.nextElementSibling.classList.contains('show')) {
      this.closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (
      this.sidebar != null &&
      this.sidebar.classList.contains('close') &&
      this.toggleButton != null
    ) {
      this.sidebar.classList.toggle('close');
      this.toggleButton.classList.toggle('rotate');
    }
  }

  closeAllSubMenus() {
    if (this.sidebar != null) {
      Array.from(this.sidebar.getElementsByClassName('show')).forEach((ul) => {
        ul.classList.remove('show');
        //  ul.previousElementSibling.classList.remove('rotate');
      });
    }
  }
}
