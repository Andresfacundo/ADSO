//Dado como entrada 3 números, determine ¿cuál es el número 
//mayor? y ¿cuál es el promedio de los 3
// Andres facundo- santiago henao
let n1 = 5
let n2 = 10
let n3 = 15
let promedio = (n1 +  n2 + n3) / 3;

function mayor(){
        if (n1 > n2 && n1 > n3){
        console.log("El numero 1 es mayor");
        console.log("El promedio es:" + promedio);
        }else if(n2 > n1 && n2 > n3){
        console.log("El numero 2 es mayor");
        console.log("El promedio es:" + promedio);
        }else {
        console.log("El numero 3 es mayor");
        console.log("El promedio es:" + promedio);

        }
}

mayor()











