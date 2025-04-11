import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripVisualizerComponent } from './trip-visualizer/trip-visualizer.component';

const routes: Routes = [
  {
    path:'', component: TripVisualizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
