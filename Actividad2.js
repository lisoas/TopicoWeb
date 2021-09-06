var readline = require('readline-sync');
var arreglo = [];
var re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/

function Fechas(arregloDias) {
    var arregloFechas = []
    arregloDias.forEach(function(elemento, index, arrayDias) {
        if (elemento.match(re)){
            arregloFechas.push(elemento)
        }
    })
    return arregloFechas.forEach(function(elemento,index){
        console.log("La Fecha " + elemento);
    })
}

function main(){
    while(true){
        var r = readline.question("Ingrese el texto: ")
        if (r == 0){
            Fechas(arreglo)
            break
        }else{
            arreglo.push(r)
        }
    }
}

main()