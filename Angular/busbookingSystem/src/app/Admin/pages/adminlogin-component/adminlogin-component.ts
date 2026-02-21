import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './adminlogin-component.html',
  styleUrl: './adminlogin-component.css',
})
export class AdminloginComponent {

  email="";
  password ="";

  constructor(private http:HttpClient ,private router:Router){}

  adminLogin(){
    const url =`http://localhost:3000/admin?email=${this.email}`
    this.http.get(url).subscribe((res:any)=>{
      console.log(res);
      if(!this.email || !this.password){
        alert("Pls Fill Data")
        return;
      }
      if(res.length === 0){
        alert("Email Not Found")
        return;
      }

      const adminuser = res[0]
      if(adminuser.password !=this.password){
        alert("Password Not Found")
      }

      localStorage.setItem("adminId",adminuser.id)
      localStorage.setItem("adminName",adminuser.name)

      alert("Login Successfully")

      this.router.navigate(["/admin"])


    })
  }
}
