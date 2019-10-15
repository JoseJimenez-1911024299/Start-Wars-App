import { Component, OnInit } from '@angular/core';
import { FilmsServiceService } from './films-service.service';


@Component({
  selector: 'app-films-com',
  templateUrl: './films-com.component.html',
  styleUrls: ['./films-com.component.css']
})
export class FilmsComComponent implements OnInit {
  // Swapi url & empty obj tu push response
  filmsUrl = 'https://swapi.co/api/films';
  // items = [];
  movies: any[] = [];

  constructor(private films:FilmsServiceService) { }

  getFilms(){
    return this.films.getFilms();
  }

 public ngOnInit()  {  }

}
