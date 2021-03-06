import { Component, Input } from '@angular/core';

import { Movie } from '@shared/models/movie.interface';

@Component({
  selector: 'app-movie-card',
  template: `
  <article class="card p-3" [routerLink]="['/movies/detail', movie?.id]">
    <h3 class="card__title flex flex-row justify-start items-center font-extrabold mb-1">
      {{ movie.title }}
    </h3>
    <figure>
      <img class="object-contain"
           rel="preload"
           as="image"
           loading="lazy"
           [src]="movie?.poster"
           [alt]="movie?.title"
           notImage />
    </figure>
    <div class="card__genres mt-3">
      <span class="card__genres--genre"
            *ngFor="let genre of movie?.genre">#{{ genre }}</span>
    </div>
  </article>`,
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: Movie;

  constructor() {}
}
