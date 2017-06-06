import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FuncoesNativasComponent } from './funcoes-nativas/funcoes-nativas.component';
import { PromiseComponent } from './promise/promise.component';
import { ArrayComponent } from './array/array.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncoesNativasComponent,
    PromiseComponent,
    ArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
