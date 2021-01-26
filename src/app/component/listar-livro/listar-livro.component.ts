import { Component, OnInit } from '@angular/core';
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
  
  constructor(private livroService : LivroService) { }

  ngOnInit(): void {
    this.recuperarLivro()
  }

  recuperarLivro() {
    this.livroService.recuperarLivro().subscribe(
      response => {
        this.livroList = response;
        console.log(this.livroList);
      }
    );
  }

}
