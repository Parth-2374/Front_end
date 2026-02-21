import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  imports: [],
  templateUrl: './switch-component.html',
  styleUrl: './switch-component.css',
})
export class SwitchComponent {

  color = "blue"
  // red(){
  //   this.color="red"
  // }
  // green(){
  //   this.color="green"
  // }
  // blue(){
  //   this.color="blue"
  // }
  handleColor(val:string){
    this.color= val
  }
  month= 1
  handleMonth(event:Event){
    this.month= parseInt((event.target as HTMLInputElement) . value)
  }
}
