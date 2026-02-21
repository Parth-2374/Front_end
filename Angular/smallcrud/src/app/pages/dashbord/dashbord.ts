import { Component } from '@angular/core';
import { Header } from '../../comon/header/header';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  imports: [Header,FormsModule],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {
id:any;
name:string ="";
email:string ="";
password:string ="";

constructor(private http:HttpClient , private router:Router){}

ngOnInit():void{
  this.id=localStorage.getItem("userId")
  if(!this.id){
    this.router.navigate(["/login"])
    return;
  } 
  const url =`http://localhost:3000/user`
  this.http.get<any>(`${url}/${this.id}`).subscribe((res)=>{
    this.name = res.name
    this.email =res.email
    this.password =res.password
  })

}
updateUser(){
  const userUpdate={
    id:this.id,
    name:this.name,
    email:this.email,
    password:this.password,
  }
  const url =`http://localhost:3000/user`
  this.http.put(`${url}/${this.id}`,userUpdate).subscribe(()=>{
    alert("Update Successfully")
  })
}


}
