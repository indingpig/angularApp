import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  constructor() { }
  @Output() saveRequest = new EventEmitter();
  save(data): any {
    console.log(data);
  }
}
