import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { HomeComponent } from "./components/home/home.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FirstComponentComponent, SecondComponentComponent, HomeComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-406';

  constructor(public router: Router) {}

  // this function will hide the component depend of the url of the component
  navigateBetweenComponentsAndHome() {
    if (this.router.url === '/first') {
      return false;
    } else if (this.router.url === '/second') {
      return false;
    } else if (this.router.url === '/home') {
      return false;
    } else {
      return true;
    }
  }
}
