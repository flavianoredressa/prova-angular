import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputFormComponent } from './input-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
     ReactiveFormsModule,
     NgxMaskModule.forRoot()
    ],
  declarations: [InputFormComponent],
  exports: [InputFormComponent],
  providers:[]
})
export class InputFormModule {}
