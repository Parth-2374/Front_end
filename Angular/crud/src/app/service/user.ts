import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  
  constructor(private http:HttpClient){}
  getuser(){
    const url= "http://localhost:3000/user";
    return this.http.get(url)
  }
}
