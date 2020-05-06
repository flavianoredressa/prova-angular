import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full'
  },
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'person/:itemId',
    component: PersonComponent
  },
  {
    path: 'listing',
    component: PersonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
