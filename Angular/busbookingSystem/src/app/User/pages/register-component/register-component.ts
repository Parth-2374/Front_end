import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  registerUser() {
    if (!this.name || !this.email || !this.password) {
      alert("Pls Fill Data")
      return;
    }
    const url = `http://localhost:3000/user?email=${this.email}`
    this.http.get(url).subscribe((res: any) => {
      if (res.length > 0) {
        alert("Email Already Registered")
        return;
      }
      const addUser = {
        id: Date.now,
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.http.post(url, addUser).subscribe(() => {

        alert("register Successfully")
        this.router.navigate(["/login"])
    })

    })
   
   
  }

}
