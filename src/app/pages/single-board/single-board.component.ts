import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  DragDropModule,
  CdkDragDrop,
  transferArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.model';

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
  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        { id: '1', title: 'Wash the dishes' },
        { id: '2', title: 'Grocery shopping' },
        { id: '3', title: 'Clean the living room' },
      ],
    },
    {
      title: 'Doing',
      todos: [
        { id: '4', title: 'Exercise for 30 minutes' },
        { id: '5', title: 'Prepare presentation for meeting' },
      ],
    },
    {
      title: 'Done',
      todos: [
        { id: '6', title: 'Read a book' },
        { id: '7', title: 'Submit assignment' },
        { id: '8', title: 'Call mom' },
      ],
    },
  ];

  drop(event: CdkDragDrop<ToDo[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }

  dropHorizontal(event: CdkDragDrop<Column[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
