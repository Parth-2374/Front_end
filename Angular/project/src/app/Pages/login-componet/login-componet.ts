import { Component } from '@angular/core';
import { HeaderComponet } from '../header-componet/header-componet';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-componet',
  imports: [HeaderComponet, CommonModule, FormsModule,RouterLink],
  templateUrl: './login-componet.html',
  styleUrl: './login-componet.css',
})
export class LoginComponet {

  email="";
  password="";

  constructor(private http:HttpClient , private router:Router){}
  
  loginUser(){
    if(!this.email || !this.password){
      alert("pls Full Fill Data")
      return;
    }
   const url=`http://localhost:3000/user?email=${this.email}`
   this.http.get(url).subscribe((res:any)=>{
    // console.log(res);
    if(res.length === 0){
      alert("Email Not Match")
      return
    }
    const user =res[0]
    if(user.password !=this.password){
      alert("Password Not Match")
      return
    }
    localStorage.setItem("userid",user.id)
    localStorage.setItem("username",user.name)
    alert("Login Succesful")
     this.router.navigate(["/"])
   })
    
  }
}

