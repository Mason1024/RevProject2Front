import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketContainerComponent } from './components/market/market-container/market-container.component';
import { UserHubComponent } from './components/userHub/user-hub/user-hub.component';


const routes: Routes = [
  {path:"market",component:MarketContainerComponent},
  {path:"userHub",component:UserHubComponent},
  {path:"**",component:MarketContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
