import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MDCPersistentDrawer, MDCPersistentDrawerFoundation, util} from '@material/drawer';
import {MDCDialog} from '@material/dialog';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output()
  displayForm = new EventEmitter<any>();

  loadGenerate = false;

  constructor() { }

  ngOnInit() {
    const drawer = new MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
    document.querySelector('.menu').addEventListener('click', () => drawer.open = drawer.open == true ? false : true);
  }

  menu_selected(){
    this.loadGenerate = this.loadGenerate == true ? false : true;
  }

  display_menu(e){
    this.displayForm.emit(e)
    this.loadGenerate = this.loadGenerate == true ? false : true;
  }


}
