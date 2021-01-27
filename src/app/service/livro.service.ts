import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { LivroModel } from '../common/livro-model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private URL_LIVRO = "https://plgkabyleapi.herokuapp.com/api/v1/livro";
  private URL_CATEGORIA_LIVRO = "http://localhost:9090/api/v1/livro/search/categoria?codigo=";

  constructor(private httpClient: HttpClient) { }

  recuperarLivro() : Observable<LivroModel[]> {
    return this.httpClient.get<GetResponseLivroModel>(this.URL_LIVRO).pipe(
      map( response => response._embedded.livroList)
    );
  }

  recuperarLivroPorCategoria(codigoCategoriaLivro) : Observable<LivroModel[]> {
    const URL_CATEGORIA_LIVRO_FORMAT = `${this.URL_CATEGORIA_LIVRO}${codigoCategoriaLivro}`;
    return this.httpClient.get<GetResponseLivroModel>(URL_CATEGORIA_LIVRO_FORMAT).pipe(
      map( response => response._embedded.livroList)
    );
  }

}

interface GetResponseLivroModel {
  _embedded: {
    livroList: LivroModel[];
  }
  
}
