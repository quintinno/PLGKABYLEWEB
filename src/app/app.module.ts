import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarLivroComponent } from './component/listar-livro/listar-livro.component';
import { LivroService } from './service/livro.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarLivroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LivroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
