import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-component',
  imports: [],
  templateUrl: './grade-component.html',
  styleUrl: './grade-component.css',
})
export class GradeComponent {
 marks= 0
 handleMarks(event:Event){
  this.marks= parseInt((event.target as HTMLInputElement) . value)
 }
}
