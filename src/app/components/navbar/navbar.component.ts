import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen = false;
  isOpenBody = false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;
}
