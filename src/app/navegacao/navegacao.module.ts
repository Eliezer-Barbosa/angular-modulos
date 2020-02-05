import { BotoesModule } from './../botoes/botoes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [MenuComponent],
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
