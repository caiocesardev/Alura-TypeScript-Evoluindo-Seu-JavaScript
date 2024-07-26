export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this.data;
    }

    get quantidade(): number{
        return this.quantidade
    }

    get valor(): number {
        return this.valor
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}