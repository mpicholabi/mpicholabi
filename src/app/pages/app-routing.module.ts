import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTrackingPageComponent } from './tracking/home-tracking.component';
import { RequirementPageComponent } from './tracking/requirement/requirement.component';
import { FaqPageComponent } from '@/app/pages/faq/faq.component';

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
  {
    path: 'faq',
    component: FaqPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModules {}
