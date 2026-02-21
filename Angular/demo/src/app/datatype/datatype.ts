import { Component } from '@angular/core';

@Component({
  selector: 'app-datatype',
  imports: [],
  templateUrl: './datatype.html',
  styleUrl: './datatype.css',
})
export class Datatype {
  name:string="Parth"
uadateName(){
// this.name="abc"
// this.name="20"
}
sum(a:number,b:number){  // a:number is prototype
  console.log(a+b);
  
}
}
