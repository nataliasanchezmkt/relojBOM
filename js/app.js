function obtenerFecha(){

let fecha = new Date();
console.log(fecha);

// devuelve el numero de mes, es un array, va del 0 al 11
console.log(fecha.getMonth())
// devuelve el nummero de mes en el que estamos
console.log(fecha.getDay())
// devuelve el numero de dia que corresponde a la semana
console.log(fecha.getDate())

let semanas = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Semptiembre','Octubre','Noviembre','Diciembre'];

let fechaReloj = document.getElementById('date');
fechaReloj.innerHTML = `${semanas[fecha.getDay()]} 
${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

// creo las  variables apra trabajar la hora

let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
if (hora < 10){
    hora = '0' + hora;
}
if (minutos < 10){
    minutos = '0' + minutos;
}
if (segundos < 10){
    segundos = '0' + segundos;
}

let horaReloj = document.getElementById('hour');

horaReloj.innerHTML = `${hora}:${minutos}:${segundos}`

}

// invocar al reloj cadaa segundo

setInterval(obtenerFecha,1000)


// funciones para cambiar de color

function changeBlue(){
    texto = document.getElementById('text');
    texto.classList.remove('violeta')
    texto.classList.remove('verde')
    texto.classList.add('azul')



}
function changeGreen(){
   texto = document.getElementById('text');
   texto.classList.remove('azul')
    texto.classList.remove('violeta')
    texto.classList.add('verde')



}
function changePurple(){
    texto = document.getElementById('text');
    texto.classList.remove('azul')
    texto.classList.remove('verde')
    texto.classList.add('violeta')



}


  

