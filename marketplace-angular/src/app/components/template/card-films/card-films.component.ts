import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';
import { Film } from 'src/app/views/list-films/film.model';

@Component({
  selector: 'app-card-films',
  templateUrl: './card-films.component.html',
  styleUrls: ['./card-films.component.css']
})
export class CardFilmsComponent implements OnInit {

  listFilms: Film[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }

  selectFilm(film: Film): void {
    this.checkoutService.setFilm(film);
    this.checkoutService.setPrice(film.price);
  }

}
