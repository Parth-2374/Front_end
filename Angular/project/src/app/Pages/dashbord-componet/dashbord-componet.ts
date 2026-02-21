import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderComponet } from '../header-componet/header-componet';

@Component({
  selector: 'app-dashbord-componet',
  imports: [HeaderComponet,CommonModule,FormsModule],
  templateUrl: './dashbord-componet.html',
  styleUrl: './dashbord-componet.css',
})
export class DashbordComponet {

  userid:any;
  name:string ="";
  email:string="";
  password:string="";

  constructor(private http:HttpClient , private roter:Router){}

  ngOnInit():void{
    this.userid =localStorage.getItem("userid")

    if(!this.userid){
      this.roter.navigate(["/login"])
      return;
    }
    const url=`http://localhost:3000/user`
    this.http.get<any>(`${url}/${this.userid}`).subscribe(res =>{
      this.name=res.name;
      this.email=res.email;
      this.password=res.password;
    })
  }
  upadateUser(){
   const upadateuser = {
    name:this.name,
    email:this.email,
    password:this.password,
   }
   const url=`http://localhost:3000/user`
   this.http.put(`${url}/${this.userid}`,upadateuser).subscribe(()=>{
    alert('Profile Updated Successfully')

   })
  }


}
