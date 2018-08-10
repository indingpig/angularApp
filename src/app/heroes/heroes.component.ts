import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); /* 从heroServie中获取数据并赋予heroes */
    this.heroService.getHeroes()
      .subscribe(_heroes => this.heroes = _heroes);
    /*等价于下面的函数
    this.heroService.getHeroes().subscribe(function(heroes) {
      this.heroes = heroes;
    }); */
  }

  ngOnInit() {
    this.getHeroes(); // 在初始化钩子中调用获取数据函数；
  }

}
