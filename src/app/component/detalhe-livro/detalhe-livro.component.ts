import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroModel } from 'src/app/common/livro-model';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css']
})
export class DetalheLivroComponent implements OnInit {

  public livroModel : LivroModel = new LivroModel();

  constructor(private activateRouter : ActivatedRoute, private livroService : LivroService) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(
      () => {
        this.recuperarLivroPorCodigo();
      }
    );
  }

  public recuperarLivroPorCodigo() {
    const codigoLivro : number = +this.activateRouter.snapshot.paramMap.get("codigo");
    this.livroService.recuperarLivroPorCodigo(codigoLivro).subscribe(
      response => {
        this.livroModel = response;
        console.log(this.livroModel);
      }
    );
  };

}
