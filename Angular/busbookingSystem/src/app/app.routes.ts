import { Routes } from '@angular/router';
import { HomeComponent } from './User/pages/home-component/home-component';
import { LoginComponent } from './User/pages/login-component/login-component';
import { RegisterComponent } from './User/pages/register-component/register-component';
import { DashbordComponent } from './User/pages/dashbord-component/dashbord-component';
import { NotfoundComponent } from './User/pages/notfound-component/notfound-component';
import { SeatSelectionComponent } from './User/pages/seat-selection-component/seat-selection-component';
import { AdminloginComponent } from './Admin/pages/adminlogin-component/adminlogin-component';
import { AdminregisterComponent } from './Admin/pages/adminregister-component/adminregister-component';
import { AddsetsSelecationComponent } from './Admin/pages/addsets-selecation-component/addsets-selecation-component';
import { AdminhomeComponent } from './Admin/pages/adminhome-component/adminhome-component';

export const routes: Routes = [


    // User
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"dashbord",component:DashbordComponent},
    {path:"seat",component:SeatSelectionComponent},


     // Admin Pages
    {path:"admin",component:AdminhomeComponent},
    {path:"adminlogin",component:AdminloginComponent},
    {path:"adminregister",component:AdminregisterComponent},
    {path:"adminaddseats",component:AddsetsSelecationComponent},

    // 404 Not Found
    {path:"**",component:NotfoundComponent}
];
