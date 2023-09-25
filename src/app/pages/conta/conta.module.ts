import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ListagemContaComponent } from './listagem-conta/listagem-conta.component';



@NgModule({
  declarations: [
    CadastroContaComponent,
    ListagemContaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContaModule { }
