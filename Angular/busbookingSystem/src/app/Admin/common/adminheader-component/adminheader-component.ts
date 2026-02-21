import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader-component',
  imports: [],
  templateUrl: './adminheader-component.html',
  styleUrl: './adminheader-component.css',
})
export class AdminheaderComponent {

  adminuser:string ="";
  constructor(private router:Router){}

  ngOnInit(){
    const admin = localStorage.getItem("adminName")
    if(!admin){
      this.router.navigate(["/adminlogin"])
      return;
    }
    this.adminuser=admin
  }
  adminLogout(){
    localStorage.removeItem("adminId")
    localStorage.removeItem("adminName")
    
    alert("LogOut Successfully")

    this.router.navigate(["/adminlogin"])
  }
}
