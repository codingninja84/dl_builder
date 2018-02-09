import { Component, OnInit } from '@angular/core';
import { NewSlideService } from "./new-slide.service"
import {Observable} from 'rxjs/Rx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-slide-form',
  templateUrl: './new-slide-form.component.html',
  styleUrls: ['./new-slide-form.component.css']
})
export class NewSlideFormComponent implements OnInit {

  deck_name: string;
  key: string;
  value: string;
  push_values: Array<object> = []
  display_name_deck_form: boolean = true;
  display_add_push: boolean = false;
  deck_id: any;

  constructor(private _newSlideService : NewSlideService) { }

  ngOnInit() {

  }




sendRequest(postData){
  this.display_name_deck_form = false;

    let obj = {name: this.deck_name};
    let data = this._newSlideService.newSlide(obj).subscribe(
       data => {
         // refresh the list
         console.log(data)
         this.deck_id = data
         return true;
       },
       error => {
         console.error("Error saving food!")
         console.log(error);
         return Observable.throw(error);
       }
    );
}

addPush(){
  let key = this.key;
  let value = this.value;
  this.push_values.push({key : [key, value]})
  this.key = "";
  this.value = "";
}

submitPush(){
  let obj = {body: [this.push_values, this.deck_id]};
  this._newSlideService.newPush(obj).subscribe(
     data => {
       // refresh the list
       console.log(data)
       return true;
     },
     error => {
       console.error("Error returning data!")
       console.log(error);
       return Observable.throw(error);
     }
  );
}

}
