import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  DragDropModule,
  moveItemInArray,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, NgFor],
  templateUrl: './single-board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class SingleBoardComponent {
  todos: ToDo[] = [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
  ];

  drop(event: CdkDragDrop<ToDo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
