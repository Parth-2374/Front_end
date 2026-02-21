import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-single-component',
  imports: [],
  templateUrl: './single-component.html',
  styleUrl: './single-component.css',
})
export class SingleComponent {
count=signal(10)
constructor(){effect(()=>{
  console.log(this.count());
  
})}
change(val:string){
  
  if(val=="inc"){
    this.count.set(this.count()+1)
  }else if(val=="dec"){
    if(this.count() >0){

      this.count.set(this.count()-1)
    }
  }else{
    this.count 
  } 
}
data:WritableSignal <number  | string> = signal(20)
data2:Signal<number> = computed(()=>200)
changeName(){
  this.data.set("Hello")
  // this.data.update((val)=>val+1)
}
}
