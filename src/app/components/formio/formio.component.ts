import { Component, OnInit, ElementRef } from '@angular/core';
const Validator = require('../../../../node_modules/formiojs/components/Validator.js');
const Base = require('../../../../node_modules/formiojs/components/base/base.js');

@Component({
  selector: 'app-formio',
  templateUrl: './formio.component.html',
  styleUrls: ['./formio.component.css']
})
export class FormioComponent implements OnInit {

  constructor(public element: ElementRef) { }
  public v = Validator;
  public base = Base;
  public a: any;
  public formConfig: any;
  ngOnInit() {
    this.getFormConfig();
  }
  renderForm() {
    this.getFormConfig();
  }
  getFormConfig() {
    this.formConfig = JSON.parse(localStorage.getItem('formBuilderData'));
  }
  save() {
    console.log(this.base);
    this.a = this.element.nativeElement.querySelector('form[name="formioForm"]');
    console.log(this.a);
  }
  // public formioScope = angular.element('form[name="formioForm"]').scope();
}
