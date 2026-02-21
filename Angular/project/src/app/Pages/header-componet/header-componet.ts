import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-componet',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header-componet.html',
  styleUrl: './header-componet.css',
})
export class HeaderComponet {

  username: string = "";
  constructor(private router: Router) { }

  ngOnInit(){
    const users =localStorage.getItem("username")
    if(!users){
      this.router.navigate(["/login"])
      return
    }
    this.username= users

    
  }
  logOut(){
   localStorage.removeItem("username")
   localStorage.removeItem("userid")
   this.router.navigate(["/"])   
  }
}
