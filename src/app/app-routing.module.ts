import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
