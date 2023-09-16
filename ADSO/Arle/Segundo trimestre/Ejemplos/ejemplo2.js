// let estado = true;
// let color = 'rojo';

if(estado)
    
if(color == 'verde'){
    console.log(`puede seguir porque el color es ${color}`);
}else if(color == 'rojo'){
    console.log(`debe parar porque el color es ${color}`);
}else if(color == 'amarillo'){
    console.log(`enciende motores porque el color es ${color}`);
}else{
    console.log('esta dañado');
}else{
    console.log('semaforo apagado...');
}

let number = 4
number > 5 ? console.log('uno') : console.log('dos');

let x = number > 2 ? 4: number > 0 ? 3: 3;

let color = 'rojo';

let mensaje = color == 'verde' ? `puede seguir porque el color es ${color}` :
color == 'rojo' ? `debe parar porque el color es ${color}` :
color == 'amarillo' ? `enciende motores porque el color es ${color}`:
console.log(mensaje);


