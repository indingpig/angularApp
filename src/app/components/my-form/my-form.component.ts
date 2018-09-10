import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormServiceService } from '../../services/form-service.service';
import { FormioComponent, FormioService } from 'angular-formio';


class Lists {
  constructor() {}
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor(private _myformService: FormServiceService) { }

  public lists: Lists[];

  ngOnInit() {

  }
  save(_form) {
    console.log(_form);
  }
  /* @ViewChild(FormioComponent) formioComponent: FormioComponent;
  ngAfterViewInit() {
    //  Here, this.formioComponent is undefined;
    this.formioComponent.ready.then((formio: any) => {
      this._myformService.saveRequest.subscribe(data => {
        formio.executeSubmit().then(submission => {
          this._myformService.save(data);
        }, err => {
          console.log(err);
        });
      });
    });
  } */
  // ngAfterViewInit() {
  //   this.formioComponent.ready.then((formio: any) => {

  //     /* LISTEN FOR SAVE EVENT (SUBMIT BUTTONS TO BE CLICKED) */
  //     this._myformService.saveRequest.subscribe(data => {
  //       /* triggers validation */
  //       formio.executeSubmit()
  //       .then(submission => {
  //         /* FORM IS VALID */
  //           this._myformService.save(data);
  //         },
  //         err => {
  //           console.log('invalid');
  //           /*
  //             FORM IS NOT VALID
  //             err contains an array of field conf literals and
  //             their corresponding validation errors
  //           */
  //         });
  //     });

  //   });
  // }
}
