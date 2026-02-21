import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

  userName :string ="";

  constructor(private router:Router){}

  ngOnInit(){
    const user=localStorage.getItem("userName")
    if(!user){
      this.router.navigate(["/login"])
      return
    }
    this.userName=user 
  }

  logOut(){
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")

    this.router.navigate(["/login"])
  }
}
