import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSlideForm = false;
  title = 'app';

  display_form(e){
        console.log("here")
        this.showSlideForm = this.showSlideForm == true ? false : true;
  }
}
