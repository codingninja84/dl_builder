import { Component, OnInit } from '@angular/core';
import {MDCDialog} from '@material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const dialog = new MDCDialog(document.querySelector('#my-mdc-dialog'));
      dialog.show();
  }

}
