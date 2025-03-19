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
  @Input() color: 'success' | 'danger' | 'primary' | 'light' | 'sky' =
    'primary';

  private readonly mapColors = {
    success: this.createColorClasses('success'),
    primary: this.createColorClasses('primary'),
    danger: this.createColorClasses('danger'),
    sky: this.createColorClasses('sky'),
    light: this.createColorClasses('light', true),
  };

  private createColorClasses(color: string, isLight?: boolean) {
    return {
      [`bg-${color}-700`]: true,
      [`hover:bg-${color}-800`]: true,
      [`focus:ring-${color}-300`]: true,
      [`text-${isLight ? 'gray-700' : 'white'}`]: true,
    };
  }

  get colors() {
    return this.mapColors[this.color] || {};
  }
}
