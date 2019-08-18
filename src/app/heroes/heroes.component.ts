import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  selectedHero: Hero
  heroes : Hero[];

  
  ngOnInit() {
  }


  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }




  onSelect(hero: Hero):void {
    this.selectedHero=hero;
  }

  
}
