import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CarrinhoCompraItem } from '../common/carrinho-compra-item';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoSituacaoService {

  public carrinhoComprasItemList: CarrinhoCompraItem[] = [];
  public totalCompra: Subject<number> = new Subject<number>();
  public totalQuantidade: Subject<number> = new Subject<number>();

  constructor() { }

  public adicionarProdutoCarrinhoCompra(carrinhoCompraItem : CarrinhoCompraItem) {
    let isExisteNoCarinho: boolean = false;
    let isExisteEsseItemCarrinho: CarrinhoCompraItem = undefined;
    if(this.carrinhoComprasItemList.length > 0) {
      isExisteEsseItemCarrinho = this.carrinhoComprasItemList.find(itemTemporarioCarrinhoCompraItem => {
        itemTemporarioCarrinhoCompraItem.codigo = carrinhoCompraItem.codigo;
      });
      isExisteNoCarinho = (isExisteEsseItemCarrinho != undefined);
    }
    if(isExisteNoCarinho) {
      isExisteEsseItemCarrinho.quantidadeEstoque++;
    } else {
      this.carrinhoComprasItemList.push(carrinhoCompraItem);
    }
    this.cacularPrecoTotalCarrinhoCompra();
  }

  public cacularPrecoTotalCarrinhoCompra() {
    let precoTotal: number = 0;
    let precoQuantidadeTotal: number = 0;
    for(let carrinhoCompraItem_ of this.carrinhoComprasItemList) {
      precoTotal = precoTotal + carrinhoCompraItem_.quantidadeEstoque * carrinhoCompraItem_.precoUnitatio;
      precoQuantidadeTotal = precoQuantidadeTotal + carrinhoCompraItem_.quantidadeEstoque;
    }
    console.log(`Preço Total: ${precoTotal}`, `Total por Quantidade: ${precoQuantidadeTotal}`);
    this.totalCompra.next(precoTotal);
    this.totalQuantidade.next(precoQuantidadeTotal);
  }

}
