import { Routes } from '@angular/router';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [


    {
        path:"",
        redirectTo:'login',
        pathMatch:'full',
        title:'Shopsy | Login'
    },
    {
        path:"login",
        component:LoginComponent,
        title:'Shopsy | Login'
    },
    {
        path:'home',
        component:HomeComponent,
        title:'Shopsy | Home',
        canActivate:[authGuard]
    },
    {
        path:"single-prod/:id",
        component:SingleProductPageComponent,
        title:"Shopsy | View Product",
        canActivate:[authGuard]
    }
];
