import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [],
      email: [],
      telefone: [],
      endereco: []
    });
  }


  cadastro() {
    // this.conversao = JSON.stringify(this.valoresForm);
    // localStorage.setItem('cadastro', this.conversao);
    // console.log(this.formCadastro.controls);
  }
}
