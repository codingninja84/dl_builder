import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setIframe()
  }

  setIframe(){
  // let iframe = document.createElement('iframe');
  // console.log(iframe)
  //   iframe.setAttribute('src', "https://docs.google.com/presentation/d/1iALVQHkSIKjgGIh9-zpz0c15-2-MMoGNGRjHSj1YW2A/edit#slide=id.g1107ea5cb_10");
  //   iframe.id = "test";
  // let div = document.getElementById('main-container')
  // let frame = div.appendChild(iframe)
  // let test = document.getElementById('test')
  // // setInterval(function(){
  // //     console.log(frame.childNodes[0])
  // // },3000)
  //



  }

}
