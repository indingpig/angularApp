import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormioModule } from 'angular-formio';
import { AlertModule } from 'ngx-bootstrap'; /* 添加bootstrap  https://github.com/valor-software/ngx-bootstrap*/
/* 这个是数据双向绑定模块 */
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
/*每当用命令行创建组件时，angular会自动在这个文件导入组件*/
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormioComponent } from './components/formio/formio.component';
import { FormbuilderComponent } from './components/formbuilder/formbuilder.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { MyFormComponent } from './components/my-form/my-form.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormioModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FormioComponent,
    FormbuilderComponent,
    FormButtonComponent,
    MyFormComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
