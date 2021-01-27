import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroModel } from 'src/app/common/livro-model';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-listar-livro',
  // templateUrl: './listar-livro.component.html',
  templateUrl: './listar-livro-grid.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livroList: LivroModel[] = [];
  codigoCategoriaLivroSelecionado: number;
  
  constructor(private livroService : LivroService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe( () => {
      this.recuperarLivroPorCategoria();
    });
  }

  recuperarLivro() {

    const isCategoriaLivroCodigo: boolean = this.activedRoute.snapshot.paramMap.has("codigo");

    if(isCategoriaLivroCodigo) {
      this.codigoCategoriaLivroSelecionado = +this.activedRoute.snapshot.paramMap.get("codigo");
    } else {
      this.codigoCategoriaLivroSelecionado = 1;
    }

    this.livroService.recuperarLivro().subscribe(
      response => {
        this.livroList = response;
        console.log(this.livroList);
      }
    );

  }

  recuperarLivroPorCategoria() {
    const isCategoriaLivroCodigo: boolean = this.activedRoute.snapshot.paramMap.has("codigo");
    if(isCategoriaLivroCodigo) {
      this.codigoCategoriaLivroSelecionado = +this.activedRoute.snapshot.paramMap.get("codigo");
    } else {
      this.codigoCategoriaLivroSelecionado = 1;
    }
    this.livroService.recuperarLivroPorCategoria(this.codigoCategoriaLivroSelecionado).subscribe(
      response => {
        this.livroList = response;
      }
    );
    
  }

}
