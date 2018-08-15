import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})


export class FormbuilderComponent implements OnInit {

  constructor( private http: HttpClient) { }
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('code') codeElement?: ElementRef;

  public triggerRefresh: any;

  public form: Object = {
    components: [],
  };
  ngOnInit() {
    this.triggerRefresh = new EventEmitter();
  }
  save() {
    // this.http.post();
    console.log(this.form);
    localStorage.setItem('formBuilderData', JSON.stringify(this.form));
  }
  onChange(event) {
    // this.jsonElement.nativeElement.innerHTML = '';
    // this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    // this.triggerRefresh.emit({
    //   property: 'form',
    //   value: this.form
    // });
  }

}
