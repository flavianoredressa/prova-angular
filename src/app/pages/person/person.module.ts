import { InputFormModule } from 'src/app/components/input-form/input-form.module';
import { PersonListComponent } from './person-list/person-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonComponent } from './person/person.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [PersonComponent, PersonListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    NgbTooltipModule,
    InputFormModule,
    NgxMaskModule.forRoot()
  ]
})
export class PersonModule { }
