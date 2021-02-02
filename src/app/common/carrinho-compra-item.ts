import { LivroModel } from "./livro-model";

export class CarrinhoCompraItem {

    codigo: string;
    nome: string;
    precoUnitatio: number;
    urlImagem: string;
    quantidadeEstoque: number;

    constructor(livroModel: LivroModel) {
        this.codigo = livroModel.codigo;
        this.nome = livroModel.nome;
        this.urlImagem = livroModel.urlImagem;
        this.precoUnitatio = livroModel.precoUnitatio;
        this.quantidadeEstoque = 1;
    }

}
