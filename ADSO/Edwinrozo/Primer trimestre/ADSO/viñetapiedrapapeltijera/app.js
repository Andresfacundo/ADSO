//crear variable y la sintaxis document.ElementById,
//llamar el elemento html por su id (botones)
const piedra = document.getElementById("btn-piedra");
const papel = document.getElementById("btn-papel");
const tijera = document.getElementById("btn-tijera");

//crear variable y con la sintaxis document.getElementById,
// llamar el elemento html por su id (parrafo)
const respuesta = document.getElementById("p-respuesta");

piedra.addEventListener("click", mostrarPiedra);

function mostrarPiedra(){
    respuesta.textContent ="El usuario eligio piedra";
    respuesta.style.color = "blue"
}
