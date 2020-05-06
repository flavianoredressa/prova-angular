import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

type NewType = number;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'helpper-input',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit, AfterViewInit {
  @Input() label: string;
  @Input() name: string;
  @Input() mask: string;
  @Input() ex: string;
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
  @Input() disabled: boolean;
  @Input() type = 'text';
  @Input() rows: NewType = 1;

  @Input() items: any[];
  @Input() selectLabel: string = 'text';
  @Input() selectId: string = 'id';
  @Input() notFoundText: string = 'id';



  required = false;

  @Output() onfocusout = new EventEmitter();
  @Output() change = new EventEmitter();

  get f() {
    return this.formGroup.controls[this.name];
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.f);
    setTimeout(() => {
      this.required = this.f && this.f.errors && this.f.errors.required === true;
    }, 500);

    const item = document.getElementById(this.name);
    const thit = this;

    if (this.disabled) {
      item.setAttribute('disabled', 'true');
    }
    if (this.onfocusout) {
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
