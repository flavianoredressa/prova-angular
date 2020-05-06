import { BaseModel } from './base-model';
import { Endereco } from './endereco';

export class User extends BaseModel {
  name = '';
  cpf = '';
  email = '';
  phone = '';
  cep = '';
  logradouro = '';
  numero = 0;
  bairro = '';
  cidade = '';
  estado = '';
  // endereco = new Endereco();
}
 