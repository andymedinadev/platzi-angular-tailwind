import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';

// ICONS
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta?: boolean;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  todo!: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData,
  ) {
    this.todo = data.todo;
  }

  icons = {
    bars: faBars,
    check: faCheckSquare,
    checkSlot: faCheckToSlot,
    clock: faClock,
    close: faClose,
    user: faUser,
    tag: faTag,
  };

  close() {
    this.dialogRef.close();
  }

  // closeWithRta(rta: boolean) {
  //   this.dialogRef.close({
  //     rta,
  //   });
  // }
}
