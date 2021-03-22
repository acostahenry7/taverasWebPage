import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { IvestmentsComponent } from './ivestments/ivestments.component';
import { CooperativesComponent } from './cooperatives/cooperatives.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'solutions', component: SolutionsComponent },
  {path: 'vehicles', component: VehiclesComponent },
  {path: 'cooperatives', component: CooperativesComponent},
  {path: 'investments', component: IvestmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
