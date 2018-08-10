import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* 这个是数据双向绑定模块 */
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
/*每当用命令行创建组件时，angular会自动在这个文件导入组件*/
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
