import { Component } from '@angular/core';

@Component({
  selector: 'app-condition-component',
  imports: [],
  templateUrl: './condition-component.html',
  styleUrl: './condition-component.css',
})
export class ConditionComponent {
// display=true
// toggle1=true

// show(){
//   this.display= true
// }
// hide(){
//   this.display=false
// }
// toggle(){
//   this.display=!this.display
// }
// togglediv(){
//   this.toggle1= !this.toggle1
// }
color=1

handleColor(val:number){
  this.color=val
}
handleInput(event:Event){
  this.color=parseInt((event.target as HTMLInputElement).value) 
}
}
