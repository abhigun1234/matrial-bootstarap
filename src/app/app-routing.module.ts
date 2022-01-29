import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FoodGaleryComponent } from './food-galery/food-galery.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'home',component:HomeComponent},
{path:'food',component:FoodGaleryComponent},{path:'**',component:NotFoundComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
