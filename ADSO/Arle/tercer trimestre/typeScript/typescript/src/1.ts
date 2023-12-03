class Carro{
    readonly marca: string;
    readonly modelo: number;

    constructor(marca: string, modelo: number){
        this.marca = marca;
        this.modelo = modelo;
    }
    comprar(){
        console.log(`Es una ${this.marca} y es modelo ${this.modelo}`);
    }
}

const carro = new Carro("duke",2023);
// console.log(carro.marca);
console.log(carro.comprar());