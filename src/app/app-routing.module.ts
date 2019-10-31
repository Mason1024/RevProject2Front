import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketContainerComponent } from './components/market/market-container/market-container.component';
import { UserHubComponent } from './components/userHub/user-hub/user-hub.component';
import { LoginComponent } from './components/header/login/login.component';
import { NewUserComponent } from './components/header/new-user/new-user.component';


const routes: Routes = [
  {path:"market",component:MarketContainerComponent},
  {path:"userHub",component:UserHubComponent},
  {path:"login",component:LoginComponent},
  {path:"newUser",component:NewUserComponent},
  {path:"**",component:MarketContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
