
import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

   username:string ="";
   constructor(private router :Router){}

   ngOnInit(){
    const user = localStorage.getItem("userName")
    if(!user){
      this.router.navigate(["/login"])
      return
    }
    this.username=user
   }

   logOut(){
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")

    this.router.navigate(["/login"])
   }
}
