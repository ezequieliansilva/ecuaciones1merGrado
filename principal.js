// principal.js

let incognitas = [];
let aciertos = 0;
let errores = 0;
function generarIncognitas(){
    i = 0;
    incognitas= [];
    while(i < 6)
    {
        let num = Math.floor(Math.random() * 8) + 1;
        while(incognitas.includes(num)){
            num = Math.floor(Math.random() * 8) + 1;
        }
        incognitas.push(num);
        i++;
    }
    return incognitas;
}
function generarEcuacion(x, id , letra) {
    let simbolo = simboloAleatorio();
    let primero = Math.floor(Math.random() * 9) + 1;
    let segundo = Math.floor(Math.random() * 9) + 1;
    let tercero = Math.floor(Math.random() * 9) + 1;
    let cuarto = 0;
    if (simbolo == " + " ){
        cuarto = primero*x + segundo - tercero*x;
    } else {
        cuarto = primero*x - segundo - tercero*x;
    }

    document.getElementById(id).innerHTML = primero + letra+ " "+ simbolo + segundo+ " = " + tercero + letra+ finalEcua(cuarto);
}

function finalEcua (num){
    if (num > 0){
        return " + " + num;
    } else if (num < 0){
        return " - " + Math.abs(num);
    } else {
        return "";
    }
}

function simboloAleatorio() {
    return Math.random() < 0.5 ? " + " : " - ";
}

function descativar(id){
    if (aciertos >= 3 || errores >= 3){
        alert("El juego ha terminado, recarga la pagina para jugar de nuevo");
    }
    else{
        if (verificar(id)){
        document.getElementById(id).innerHTML = "<img src='bomba.png'>";
        aciertos++;
    }
    else{
        document.getElementById(id).style.backgroundColor = "green";
    }
    
    if (aciertos == 3){
        alert("Felicidades has ganado");
    }
    if (errores == 3){
        alert("Lo siento has perdido");
        alert("Las casas eran: x = "+incognitas[0]+" y = "+incognitas[1]+" , x = "+incognitas[2]+" y = "+incognitas[3]+" , x = "+incognitas[4]+" y = "+incognitas[5]);
    }
    }
    
}

function verificar(id){
    if (aciertos < 3 && errores < 3){
        if (id == incognitas[1].toString() + incognitas[0].toString() || id == incognitas[3].toString() + incognitas[2].toString() || id == incognitas[5].toString() + incognitas[4].toString()){
            aciertos++;
            return true;
        }
        errores++;
        return false;
        
    }

    
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Generar dos números aleatorios entre 1 y 100 y mostrarlos en la consola
    incognitas = generarIncognitas();
    ecuaciones = generarEcuacion(incognitas[0],"ecuaX1", "x")       
    ecuaciones = generarEcuacion(incognitas[1],"ecuaY1", "y")       
    ecuaciones = generarEcuacion(incognitas[2],"ecuaX2", "x")       
    ecuaciones = generarEcuacion(incognitas[3],"ecuaY2", "y")       
    ecuaciones = generarEcuacion(incognitas[4],"ecuaX3", "x")       
    ecuaciones = generarEcuacion(incognitas[5],"ecuaY3", "y")       
    
    console.log(incognitas);
    console.log("¡No mires aquí!")

        
        
});