import { photo } from './../../shared/assets/data/data';
import { Component } from '@angular/core';
import * as data from '../../shared/assets/data/data';
import { NgFor } from '@angular/common';

interface photo {
  emplacement_img: string;
  cliches: {
    titre: string;
    date: string;
    fichier: string;
    description: string;
  }[];
}

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {

  photos: any[] = [];

  constructor() {}

  ngOnInit() {
    this.photos = [data.photo.cliches];
    console.log(this.photos);
  }

}
