import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewSlideService {


constructor(private http: HttpClient) {

}

newSlide(obj) {
  let body = JSON.stringify(obj);
  console.log(obj)
  return this.http.post('http://localhost:8000/create-slide/', body, httpOptions)

}

newPush(obj){
  let body = JSON.stringify(obj);
  console.log(obj)
  return this.http.post('http://localhost:8000/new-push/', body, httpOptions)
}

}
