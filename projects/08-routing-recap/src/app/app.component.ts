import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: `
    .button {
      box-shadow: inset 0 1px 0 0 #ffffff;
      background: #ffffff linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
      border-radius: 6px;
      border: 1px solid #dcdcdc;
      display: inline-block;
      cursor: pointer;
      color: #666666;
      font-family: Arial, sans-serif;
      font-size: 15px;
      font-weight: bold;
      padding: 6px 24px;
      text-decoration: none;
      text-shadow: 0 1px 0 #ffffff;
      outline: 0;
    }
    .activebutton {
      align-self: center;
      background-color: #fff;
      background-image: none;
      background-position: 0 90%;
      background-repeat: repeat no-repeat;
      background-size: 4px 3px;
      border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
      border-style: solid;
      border-width: 2px;
      box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
      box-sizing: border-box;
      color: #41403e;
      cursor: pointer;
      display: inline-block;
      font-family: Neucha, sans-serif;
      font-size: 1rem;
      line-height: 23px;
      outline: none;
      padding: .75rem;
      text-decoration: none;
      transition: all 235ms ease-in-out;
      border-bottom-left-radius: 15px 255px;
      border-bottom-right-radius: 225px 15px;
      border-top-left-radius: 255px 15px;
      border-top-right-radius: 15px 225px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .activebutton:hover {
      box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
      transform: translate3d(0, 2px, 0);
    }

    .activebutton:focus {
      box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
    }
  `,
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <section>
      <button class="button" [routerLink]="'/'">Home</button>
      @for (title of productTitles; track title; let i = $index) {
      <button
        class="button"
        [routerLink]="['details', i + 1]"
        routerLinkActive="activebutton"
        ariaCurrentWhenActive="page"
      >
        {{ title }}
      </button>
      }
    </section>

    <router-outlet />
  `,
})
export class AppComponent {
  title = '08-routing-recap';
  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
