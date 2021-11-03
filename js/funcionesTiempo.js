// cuando quiero ejecutar una accion luego de un cierto tiempo: usamos setTimeout
// por ejemplo los pop-up de las paginas web
// primero definimos la funcion
let contador = 1
function saludar(){
    document.write('<br>Hola!')
    if (contador == 5){
        window.clearInterval(intervalo)
    }
   contador++;
}




// despues creamos el set time out
// window :objeto del bom
// set time out: establece el tiempo se pasan dos parametros una funcion y el tiempo 
// en ese tiempo se ejecutara la funcion

window.setTimeout(saludar,3000 )

// otra forma de escirbirlo es con una funcion adentro, uso esta manera si e suna funcion q no usare masen todo el programa, es mejro trabjarla en forma de flecha. La funcion tiene que se anonima

setTimeout(() =>{
    document.write('<br>Hola!')
}, 4000);




// Para ejecutar una accion/funcion cada cieerto tiempo en ms
// para eso usamos setInterval es del objeto window

//   window.setInterval(saludar, 2500);

//   no para a menos q se lo digamos para eso lo gaurdamos en un let
// creamos otra variable contador para establecer una condicional

let intervalo = window.setInterval(saludar,2500);

