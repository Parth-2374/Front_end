import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {

  clickme(event:MouseEvent){
    console.log("Funcation call",event);
    console.log("Funcation call",event.type);
    console.log("Funcation call",(event.target as Element).classList);
  }
  mouseEvent(event:MouseEvent){
    console.log("Mouse Enter the box");
    
  }
  input(event:any){
    console.log("chang the value");
    console.log("get value",event.target.value);
    
  }
  focus(event:any){
    console.log("focus the value");
    console.log("blur the value");
  }
}
