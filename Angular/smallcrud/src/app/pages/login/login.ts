import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    email ="";
    password ="";

    constructor(private http:HttpClient , private router:Router ){}

    loginUser(){
      if(!this.email || !this.password){
        alert("Pls Fill Data")
        return
      }
      const url=`http://localhost:3000/user?email=${this.email}`
      this.http.get(url).subscribe((res:any)=>{
        if(res.length === 0){
          alert("Email Not Match")
          return
        }
        const user = res[0]
        if(user.password !=this.password){
          alert("Password Not Match")
          return
        }
        
        localStorage.setItem("userId",user.id)
        localStorage.setItem("userName",user.name)

        alert("Login Successfully")
        
        this.router.navigate(["/"])
      })
    }
}
