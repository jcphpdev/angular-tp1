import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  favorite = false;

  constructor() { }

  ngOnInit() {
  }

  setFavorite() {
    this.favorite = !this.favorite;
  }

}
