// let message = parseInt(prompt('digite un numero'));

// switch(message){
//     case 1:
//         document.write('hola')
//         break
//     case 2:
//         document.write('jjjj')
//     default:
//         break;
// }

let opcionTurno = parseInt(prompt('1. ver saldo 2. consginar 3. retirar'));
let saldo = 10000;

switch(opcionTurno){
    case 1: {
        document.write(`su saldo es ${saldo}`); break;
}
    case 2: {
    let consignacion = Number(prompt('ingrese valor a consignar'));
    saldo+= consignacion
    document.write(`consginacion por ${consignacion} saldo nuevo: ${saldo}`); break;
}
    case 3 :{
    let retiro = Number(prompt('ingrese valor a retirar'));
    saldo -=retiro;
    document.write(`retiro por ${retiro}, saldo nuevo: ${saldo}`); break;
}
}
