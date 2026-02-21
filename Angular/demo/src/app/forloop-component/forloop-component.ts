import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-forloop-component',
  imports: [],
  templateUrl: './forloop-component.html',
  styleUrl: './forloop-component.css',
})
export class ForloopComponent {
user =["a","b","c"]
student= [
  {name:'parth', age:"20", course:"front-end" ,email:"parth@gmail.com"},
  {name:'nirav', age:"23", course:"back-end" ,email:"nirav@gmail.com"},
  {name:'yash', age:"29", course:"full-stack" ,email:"yash@gmail.com"}
]
getname(name:string){
console.log(name);

}
}
