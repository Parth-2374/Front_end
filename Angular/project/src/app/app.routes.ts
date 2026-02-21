import { Routes } from '@angular/router';
import { LoginComponet } from './Pages/login-componet/login-componet';
import { HomeComponet } from './Pages/home-componet/home-componet';
import { NotfoundComponet } from './Pages/notfound-componet/notfound-componet';
import { RegisterComponet } from './register-componet/register-componet';
import { DashbordComponet } from './Pages/dashbord-componet/dashbord-componet';




export const routes: Routes = [
{path:"login",component:LoginComponet},  // login
{path:"register",component:RegisterComponet},  //register
{path:"dashbord",component:DashbordComponet}, //dashbord
{path:"",component:HomeComponet},  //homepage

{path:"**",component:NotfoundComponet} // 404 Not Found
];
