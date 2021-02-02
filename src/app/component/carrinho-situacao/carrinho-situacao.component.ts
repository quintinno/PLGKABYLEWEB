import { Component, OnInit } from '@angular/core';
import { CarrinhoSituacaoService } from 'src/app/service/carrinho-situacao.service';

@Component({
  selector: 'app-carrinho-situacao',
  templateUrl: './carrinho-situacao.component.html',
  styleUrls: ['./carrinho-situacao.component.css']
})
export class CarrinhoSituacaoComponent implements OnInit {

  public precoTotalItem: number = 0;
  public precoQuantidadeTotalItem: number = 0;

  constructor(private carrinhoSituacaoService: CarrinhoSituacaoService) { }

  ngOnInit() {
    this.atualizarSituacaoCarrinhoCompras();
  }

  public atualizarSituacaoCarrinhoCompras() {
    this.carrinhoSituacaoService.totalCompra.subscribe(
      response => this.precoTotalItem = response
    )
    this.carrinhoSituacaoService.totalQuantidade.subscribe(
      response => this.precoQuantidadeTotalItem = response
    )
  }

}
