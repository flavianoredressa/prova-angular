import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CepService } from 'src/app/services/cep.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  user = new User()
  formGroup: FormGroup;
  constructor(
    private _user: UserService,
    private _cep: CepService,
    private _spinner: NgxSpinnerService,
    private location: Location,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      // nome: ['', [Validators.required]],
      // email: ['', [Validators.required]],
      // phone: ['', [Validators.required]],
      // cpf: ['', [Validators.required]],
      // cep: ['', [Validators.required]],
      // logradouro: ['', [Validators.required]],
      // numero: ['', [Validators.required]],
      // bairro: ['', [Validators.required]],
      // cidade: ['', [Validators.required]],
      // estado: ['', [Validators.required]],
      name: [''],
      email: [''],
      phone: [''],
      cpf: [''],
      // endereco: this.formBuilder.group({
        cep: [''],
        logradouro: [''],
        numero: [''],
        bairro: [''],
        cidade: [''],
        estado: [''],
      // })
      
    })
  }
  async onSubmit() {
    this._spinner.show()
      if(this.formGroup.invalid) {
      return;
    }
    Object.assign(this.user, this.formGroup.value);
    this._user.add(this.user).then(() =>{
      Swal.fire({
        title:'Ótimo',
        text:'Colaborador foi adicionado com sucesso',
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
    if(this.f.cep.value.length == 8){
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
}
