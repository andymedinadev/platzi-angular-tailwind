import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgClass, NgFor } from '@angular/common';

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
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule,
    NgClass,
    NgFor,
  ],
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

  accordions = [
    {
      label: 'Boards',
      icon: faTrello,
      items: [
        { label: 'Create new board' },
        { label: 'View recent boards' },
        { label: 'Favorite boards' },
      ],
    },
    {
      label: 'Highlights',
      icon: faHeart,
      items: [{ label: 'Add list to board' }, { label: 'Reorder lists' }],
    },
    {
      label: 'Views',
      icon: faBorderAll,
      items: [
        { label: 'Create card' },
        { label: 'Assign members' },
        { label: 'Labels & due dates' },
      ],
    },
    {
      label: 'Members',
      icon: faUsers,
      items: [{ label: 'Invite team' }, { label: 'Manage permissions' }],
    },
    {
      label: 'Settings',
      icon: faGear,
      items: [
        { label: 'Profile & preferences' },
        { label: 'Notifications' },
        { label: 'Log out' },
      ],
    },
  ];
}
