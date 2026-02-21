import { Component } from '@angular/core';

@Component({
  selector: 'app-get-andset-value',
  imports: [],
  templateUrl: './get-andset-value.html',
  styleUrl: './get-andset-value.css',
})
export class GetAndsetValue {
  name = "";
  displayName="";
  email=""
  getName(event:Event){
     this.name=(event.target as HTMLInputElement).value
    // console.log((event.target as HTMLInputElement).value);
    // this.name= val
    
  }
  showName(){
    this.displayName = this.name
  }
  setName(){
    this.name = "prem"
  }
  getEmail(val:string){
    this.email =val 
  }
  setEmail(){
    this.email ="defult@gmail.com"
  }
}
