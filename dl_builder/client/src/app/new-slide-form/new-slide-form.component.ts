import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from "@angular/http"
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-slide-form',
  templateUrl: './new-slide-form.component.html',
  styleUrls: ['./new-slide-form.component.css']
})
export class NewSlideFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

sendRequest(){


  return this.http.post("http://localhost:8000/links/", "test")
.map(data => console.log(data)).toPromise()

}

}
