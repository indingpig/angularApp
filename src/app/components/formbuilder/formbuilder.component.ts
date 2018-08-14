import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import FormBuilder from 'formiojs/FormBuilder';


// const builder = new FormBuilder(document.getElementById('formio'));

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})


export class FormbuilderComponent implements OnInit {

  constructor() { }
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('code') codeElement?: ElementRef;
  public form: Object = {
    components: [],
  };
  ngOnInit() {
  }

}
