import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoCompraItem } from 'src/app/common/carrinho-compra-item';
import { LivroModel } from 'src/app/common/livro-model';
import { CarrinhoSituacaoService } from 'src/app/service/carrinho-situacao.service';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css']
})
export class DetalheLivroComponent implements OnInit {

  public livroModel : LivroModel = new LivroModel();

  constructor(private activateRouter : ActivatedRoute, private livroService : LivroService, private carrinhoSituacaoService : CarrinhoSituacaoService) { }

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

  public adicionarProdutoCarrinhoCompra() {
    const carrinhoCompraItem = new CarrinhoCompraItem(this.livroModel);
    this.carrinhoSituacaoService.adicionarProdutoCarrinhoCompra(carrinhoCompraItem);
  }

}
