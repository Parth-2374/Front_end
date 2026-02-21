import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-componet',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './register-componet.html',
  styleUrl: './register-componet.css',
})
export class RegisterComponet {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient , private router:Router) { }

  registerPage( ) {

    if (!this.name || !this.email || !this.password) {
      alert('Pls Full Fill Data')
      return;
    }
    const url = `http://localhost:3000/user?email=${this.email}`
    this.http.get(url).subscribe((res: any) => {
      if (res.length > 0){
        alert("Email already exists")
        return
      }
      const user ={
        id:Date.now(),
        name:this.name,
        email:this.email,
        password:this.password

      }

     
      this.http.post(url,user).subscribe(()=>{
        alert('Registration successful')
    this.router.navigate(["/login"])
      })
    })
  }
}
