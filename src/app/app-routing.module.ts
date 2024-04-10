import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { NewComponent } from './new/new.component';
// import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent}
  // {path:'profile',component:ProfileComponent}
  // {path:'data',component:DataComponent},
  // {path:'new',component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
