import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgClass } from '@angular/common';

// ICONS
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleUp,
  faBorderAll,
  faBox,
  faClock,
  faGear,
  faHeart,
  faUsers,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, NgClass],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  icons = {
    trello: faTrello,
    box: faBox,
    waveSquare: faWaveSquare,
    clock: faClock,
    angleUp: faAngleUp,
    angleDown: faAngleDown,
    heart: faHeart,
    borderAll: faBorderAll,
    users: faUsers,
    gear: faGear,
  };
}
