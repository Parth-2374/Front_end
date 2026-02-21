import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

 name:string ="";
 email:string ="";
 password:string ="";

 constructor(private http:HttpClient ,private router:Router ){ }

 userRegister(){
  if(!this.name || !this.email || !this.password){
    alert("pls Fill Data")
    return;
  }
  const url=`http://localhost:3000/user?email=${this.email}`
  this.http.get(url).subscribe((res:any)=>{
    if(res.length >0){
      alert("Email Already Register")
      return
    }
  const addUser ={
    id:Date.now(),
    name:this.name,
    email:this.email,
    password:this.password

  }
  this.http.post(url,addUser).subscribe(()=>{
    alert("register Successfully")
     this.router.navigate(["/login"])
  })
  })
 }
}
