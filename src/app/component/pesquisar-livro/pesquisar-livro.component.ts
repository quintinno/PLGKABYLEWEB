import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-pesquisar-livro',
  templateUrl: './pesquisar-livro.component.html',
  styleUrls: ['./pesquisar-livro.component.css']
})
export class PesquisarLivroComponent implements OnInit {

  constructor(private router: Router, private livroService : LivroService) { }

  ngOnInit() { }

  pesquisarLivro(nomeLivro: string) {
    this.router.navigateByUrl("/pesquisar-livro/"+nomeLivro);
    // this.livroService.pesquisarLivroPorNome(nomeLivro);
  }

}
