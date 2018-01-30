import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MDCDialog} from '@material/dialog';
@Component({
  selector: 'app-generate-slide',
  templateUrl: './generate-slide.component.html',
  styleUrls: ['./generate-slide.component.css']
})
export class GenerateSlideComponent implements OnInit {
 @Output()
 authorClick: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {

    const dialog = new MDCDialog(document.querySelector('#my-mdc-dialog'));
      dialog.show();
  }
  destroy(e){
    this.authorClick.emit(e);
  }


}
