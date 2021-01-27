import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListarLivroComponent } from './component/listar-livro/listar-livro.component';
import { LivroService } from './service/livro.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "livro", component: ListarLivroComponent},
  {path: "categoria-livro/:codigo", component: ListarLivroComponent},
  {path: "", redirectTo: "/livro", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListarLivroComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LivroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
