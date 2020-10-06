
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"sign-in",component:SignInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
