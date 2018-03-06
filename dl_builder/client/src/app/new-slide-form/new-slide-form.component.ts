import { Component, OnInit } from '@angular/core';
import { NewSlideService } from "./new-slide.service"
import {Observable} from 'rxjs/Rx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MDCSnackbar} from '@material/snackbar';

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
         console.log(data)
         this.deck_id = data['deck_id']
         console.log(this.deck_id)
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
  let deck_id = this.deck_id
  let value = this.value;
  this.push_values.push({key : key, value : value})
  this.key = "";
  this.value = "";
  const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
  const dataObj = {
  message: "See changes",
  timeout: 5000,
  actionText: 'Preview',
  actionHandler: function () {
    console.log(deck_id)
    window.open('https://docs.google.com/presentation/d/'+deck_id+'/edit', '_blank')
  }
};
  snackbar.show(dataObj)
}

submitPush(){
  let push_values = {}
  for (var i = 0; i < this.push_values.length; i++){
  let keys_array =  Object.values(this.push_values[i])
      push_values[keys_array[0]] = keys_array[1]
  }
  console.log(push_values)
  let obj = {values: push_values, id: this.deck_id};
  this._newSlideService.newPush(obj).subscribe(
     data => {

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
