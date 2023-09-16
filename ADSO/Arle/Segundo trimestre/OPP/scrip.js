//	const user = {
// 	name: "andres",
// 	lastname: "facundo",
// 	age: 22,
// 	hobbies: ['leer', 'programar','correr'],
// 	direccion: {
// 		calle: "alguna calle",
// 		ciudad: "armenia"}
// }

// console.log( typeof user);

function nombreCompleto() {  //se crea una funcion que retorne nombrecompleto
    return this.name + " " + this.lastname // la palabra this es para que me muestre datos o valores de las propiedades que le pertenecen al objeto
}


const user = {
    name: "paola", //propiedades //clave y valor
    lastname: "sanchez",
    age: 22,
    hobbies: ['leer', 'programar', 'correr'],
    direccion: {
        calle: "alguna calle",
        ciudad: "armenia"
    },
    nombreCompleto: nombreCompleto //creamos una propiedad que tenga como valor una funcion o un metodo
}

console.log(user.nombreCompleto()) // del user se llama la propiedad nombreCompleto


const cuenta = {
    number: "124324665467934",
    monto: 100,
    depositar(cantidad) {
        this.monto = this.monto + cantidad
    },
    retirar(cantidad) {
        this.monto = this.monto - cantidad
    }
}

cuenta.depositar(200); //de la cuenta ejecutese el metodo depositar
cuenta.depositar(1);
cuenta.depositar(2);
console.log(cuenta);

cuenta.retirar(100); //de la cuenta ejecutese el metodo  retirar
cuenta.retirar(1);

console.log(cuenta);

function Person(){
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.nombreCompleto = function () {
        return `${this.name} ${this.lastname}`
    }
}
const user2 = new Person()
user2.name = "andres"
user2.lastname = "facundo"
user2.age = 22
console.log(user2.nombreCompleto());

const user3 = new Person ()
const user4 = new Person ()
const user5 = new Person ()

console.log(user3, user4, user5);
