import { BaseModel } from './base-model';

export class Endereco extends BaseModel {
  cep = '';
  logradouro = '';
  numero = 0;
  bairro = '';
  cidade = '';
  estato = '';
}
