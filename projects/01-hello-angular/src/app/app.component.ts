import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // dynamically rendering the variable with string interpolation
  template: ` <p>username: {{ userName }}</p> `,
  styles: ``,
})
export class AppComponent {
  // creating a variable
  userName = 'codingChamp';
}
