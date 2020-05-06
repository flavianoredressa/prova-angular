import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  // tslint:disable-next-line: component-selector
  selector: 'helpper-input',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit, AfterViewInit {
  @Input() label: string;
  @Input() name: string;
  @Input() mask: string =null;
  @Input() ex: string;
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Input() defaultBoColor: string ='#dfdfdf';
  @Input() color: string ='#00b19d';

  @Input() type = 'string';
  @Input() rows = 1;

  @Input() items: any[];
  @Input() selectLabel = 'text';
  @Input() selectId = 'id';
  @Input() notFoundText = 'id';
  @Input() step: string = null;

  required = false;

  @Output() onfocusout = new EventEmitter();
  @Output() change = new EventEmitter();

  constructor() {}

  get f() {
    return this.formGroup.controls[this.name];
  }
  ngOnInit() {

   }

  ngAfterViewInit() {
    setTimeout(() => {
      this.required = this.f && this.f.errors && this.f.errors.required === true;
    }, 500);

    const item = document.getElementById(this.name) as HTMLInputElement;
    const thit = this;

    if (this.step) {
      item.setAttribute('step', this.step);
    }
    if (this.disabled) {
      item.setAttribute('disabled', 'true');
    }
    if (this.onfocusout && item) {
      // tslint:disable-next-line: only-arrow-functions
      item.addEventListener('focusout', function () {
        thit.emit('onfocusout');
      });
    }
  }

  emit(item) {
    if (this[item]) {
      this[item].emit();
    }
  }
}
