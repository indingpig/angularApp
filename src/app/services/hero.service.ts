import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
// 引入创建的mess服务
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // 在这里的构造函数需要注入引入的mess服务
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(_id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${_id}`);
    return of(HEROES.find(hero => hero.id === _id));
  }
}
