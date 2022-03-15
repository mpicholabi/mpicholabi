import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTrackingPageComponent } from './home-tracking.component';
import { RequirementPageComponent } from './requirement/requirement.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTrackingPageComponent,
    children: [
      { path: '', redirectTo: 'information-request', pathMatch: 'full' },
      {
        path: 'information-request',
        component: RequirementPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModules {}
