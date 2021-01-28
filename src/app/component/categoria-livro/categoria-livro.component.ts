import { Component, OnInit } from '@angular/core';
import { CategoriaLivroModel } from 'src/app/common/categoria-livro-model';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-categoria-livro',
  templateUrl: './categoria-livro.component.html',
  styleUrls: ['./categoria-livro.component.css']
})
export class CategoriaLivroComponent implements OnInit {

  categoriaLivroList: CategoriaLivroModel[];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.recuperarCategoriaLivro();
  }

  recuperarCategoriaLivro() {
    this.livroService.recuperarCategoriaLivro().subscribe(
      response => {
        this.categoriaLivroList = response;
      }
    );
  }

}
