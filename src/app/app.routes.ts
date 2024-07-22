import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { HomeComponent } from './components/home/home.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'first', component: FirstComponentComponent },
    { path: 'second', component: SecondComponentComponent },
    { path: 'third', component: ThirdComponentComponent },
  ];
