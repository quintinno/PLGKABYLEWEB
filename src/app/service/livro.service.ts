import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { LivroModel } from '../common/livro-model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private LIVRO_URL = "https://plgkabyleapi.herokuapp.com/api/v1/livro";

  constructor(private httpClient: HttpClient) { }

  recuperarLivro() : Observable<LivroModel[]> {
    return this.httpClient.get<GetResponseLivroModel>(this.LIVRO_URL).pipe(
      map( response => response._embedded.livroList)
    );
  }

}

interface GetResponseLivroModel {
  _embedded: {
    livroList: LivroModel[];
  }
  
}
