import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Datatype } from './datatype/datatype';
import { Counter } from './counter/counter';
import { Event } from './event/event';
import { GetAndsetValue } from './get-andset-value/get-andset-value';
import { Style } from './style/style';
import { ConditionComponent } from './condition-component/condition-component';
import { SwitchComponent } from './switch-component/switch-component';
import { GradeComponent } from './grade-component/grade-component';
import { ForloopComponent } from './forloop-component/forloop-component';
import { SingleComponent } from './single-component/single-component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, Login, Datatype ,Counter , Event ,GetAndsetValue ,Style ,
    ConditionComponent ,SwitchComponent,GradeComponent , ForloopComponent ,SingleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Hello";
  name="Parth" ;
 
  apple(){
    console.log("Apple Funcation Call");
    this.apple1()
    this.apple2()
  }
  apple1(){
    console.log("Apple1 Function call");
    
  }
  apple2(){
    console.log("Apple2 Function call");
    
  }
 
  }
