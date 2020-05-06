import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { CepService } from 'src/app/core/services/cep.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/core/models/user';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  user = new User()
  formGroup: FormGroup;
  submitted = false;
  phoneMask = '(00) 0000-00000';
  constructor(
    private _user: UserService,
    private _cep: CepService,
    private _spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder) { }

    async ngOnInit() {
      this._spinner.show()
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      cpf: ['', [Validators.required]],
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    })
    const userId = this.activatedRoute.snapshot.paramMap.get('itemId');
    if (userId) {
      this.user = await this._user.getById(userId)
      this.formGroup.patchValue(this.user);
      if(this.user.phone.length == 11){
        this.phoneMask = '(00) 0000-00000';
      } else {
        this.phoneMask = '(00) 0000-0000';
      }
    }
    this._spinner.hide()
  }
  async onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this._spinner.show()
    Object.assign(this.user, this.formGroup.value);
    
    this._user.save(this.user).then(() => {
      Swal.fire({
        title: 'Ótimo',
        text: 'Colaborador foi adicionado com sucesso',
        type: 'success',
        confirmButtonText: 'OK!',
        allowOutsideClick: () => !Swal.isLoading()
      }).then(result => {
        if (result.value) {
          this.location.back();
        }
      });
      this._spinner.hide()
    })
  }

  getCep() {
    if (this.f.cep.value.length == 8) {
      this._spinner.show()
      this._cep.getCep(this.f.cep.value).then((res: any) => {
        this.f.logradouro.setValue(res.logradouro)
        this.f.bairro.setValue(res.bairro)
        this.f.cidade.setValue(res.localidade)
        this.f.estado.setValue(res.uf)
        this._spinner.hide()
      }).catch(e => this._spinner.hide())
    }

  }
  get f() {
    return this.formGroup.controls;
  }

  checkMask(event: any) {
    if (event.target.value.length <= 14) {
      this.phoneMask = '(00) 0000-00009';
    } else {
      this.phoneMask = '(00) 00000-0000';
    }
  }
}
