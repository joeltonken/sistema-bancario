import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ListagemContaComponent } from './listagem-conta/listagem-conta.component';
import { OperacoesContaComponent } from './operacoes-conta/operacoes-conta.component';


@NgModule({
  declarations: [
    CadastroContaComponent,
    ListagemContaComponent,
    OperacoesContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [
    CadastroContaComponent,
    ListagemContaComponent
  ]
})

export class ContaModule { }