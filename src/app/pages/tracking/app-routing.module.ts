import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTrackingPageComponent } from './home-tracking.component';
import { RequestPageComponent } from './request/request.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTrackingPageComponent,
    children: [
      {
        path: 'information-request',
        component: RequestPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModules {}
