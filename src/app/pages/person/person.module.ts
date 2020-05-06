// import { NgbAlertModule, NgbTooltipModule, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { CommonModule } from '@angular/common';
// import { NgxMaskModule } from 'ngx-mask';
// import { NgModule } from '@angular/core';

import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { NgModule } from '@angular/core';
import { PersonRoutingModule } from './person-routing.module';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InputFormModule } from 'src/app/components/input-form/input-form.module';

// import { UserListComponent } from './user-list/user-list.component';
// import { UsersRoutingModule } from './users-routing.module';
// import { UserComponent } from './user/user.component';
// import { UIModule } from 'src/app/shared/ui/ui.module';
// import { InputFormModule } from 'src/app/components/input-form/input-form.module';


@NgModule({
  declarations: [PersonComponent, PersonListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    NgbTooltipModule,
    InputFormModule,

    // UIModule,
    // CommonModule,
    // NgbAlertModule,
    // NgSelectModule,
    // Ng2SearchPipeModule,
    // NgbDatepickerModule,
    // NgbPaginationModule,
    // NgxMaskModule.forRoot()
  ]
})
export class PersonModule { }
