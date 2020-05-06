import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  users = [];
  constructor(private _user: UserService, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAll()
  }
  getAll() {
    this._spinner.show()
    this._user.getUsers().then((users: any) => {
      this.users = users
      this._spinner.hide()
    }).catch(e =>{
      Swal.fire('Erro!', 'Algum erro com a API', 'error');
    })
  }

  removeUser(user){
    Swal.fire({
      title:'Deseja realmente remover?',
      text:'Esta ação é irrevercível',
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, Remover!',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return this._user.delete(user.id,).catch(() => {
          Swal.showValidationMessage(`Não foi possível remover, tente novamente.`);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(result => {
      if (result.value) {
        this.getAll()
        Swal.fire('success', `Colaborador foi removido com sucesso.`, 'success');
      }
    });
  }
}
