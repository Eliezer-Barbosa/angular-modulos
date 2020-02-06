import { BotoesModule } from './../botoes/botoes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LinhaComponent } from './linha/linha.component';



@NgModule({
  declarations: [MenuComponent, LinhaComponent],
  imports: [
    CommonModule,
    BotoesModule
  ],
  /**
   * esse modulo está importando
   * o modulo BotoesModule e está
   * reexportando-o.
   */
  exports: [MenuComponent, BotoesModule]
})
export class NavegacaoModule { }
