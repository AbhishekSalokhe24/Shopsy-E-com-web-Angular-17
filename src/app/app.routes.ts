import { Routes } from '@angular/router';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"single-prod/:id",component:SingleProductPageComponent}
];
