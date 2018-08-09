import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; /* 这个是数据双向绑定模块 */
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; /*每当用命令行创建组件时，angular会自动在这个文件导入组件*/

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
