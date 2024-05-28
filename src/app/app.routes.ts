import { Routes } from '@angular/router';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [


    {
        path:"",
        redirectTo:'login',
        pathMatch:'full'},
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:"single-prod/:id",
        component:SingleProductPageComponent
    }
];
