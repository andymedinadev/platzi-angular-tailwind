import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'danger' | 'primary' | 'gray-light' = 'primary';

  get colors() {
    return {
      'text-white':
        this.color === 'success' ||
        this.color === 'primary' ||
        this.color === 'danger',
      'text-gray-700': this.color === 'gray-light',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-700': this.color === 'danger',
      'hover:bg-red-800': this.color === 'danger',
      'focus:ring-red-300': this.color === 'danger',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-200': this.color === 'gray-light',
      'focus:ring-gray-200': this.color === 'gray-light',
    };
  }
}
