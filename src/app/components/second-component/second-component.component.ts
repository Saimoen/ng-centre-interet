import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import * as data from '../../shared/assets/data/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {

  mangas: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.mangas = data.mangas;
    console.log(this.mangas);
  }
}
