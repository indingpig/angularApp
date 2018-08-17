import { Component, OnInit, HostListener } from '@angular/core';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent {
  public _formio: any;
  constructor(private _myformService: FormServiceService) { }
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    this._myformService.saveRequest.emit(btn);
  }

}
