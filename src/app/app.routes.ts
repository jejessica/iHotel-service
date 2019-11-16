import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HoteisComponent } from "./hoteis/hoteis.component";

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'hoteis', component: HoteisComponent}
    
]