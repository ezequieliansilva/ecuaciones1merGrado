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
    let ecuacion = "";
    let total = Math.floor(Math.random() * 5)*x;
    let restante = total;
    let simbolo = simboloAleatorio();
    let primero = 0;
    let igual = false;
    let contador = 0;
    let conLetra = false;
    
    do {
        primero = Math.floor(Math.random() * 10)
    }   while (primero * x > restante || primero == 0);
    ecuacion += primero + letra + simbolo;
    if (simbolo == " - "){
        restante -= primero * x;
    } else {
        restante += primero * x;
    }
    alert("hola"+contador++);
    contador++;
    do {
        if  (restante > x && contador < 5){
            let num = Math.floor(Math.random() * 10) + 1;
            while (num > restante ) {
                num = Math.floor(Math.random() * 10) + 1;
            }
            simbolo = Math.random() < 0.5 ? " + " : " - ";
            if (contador < 5 && !conLetra){
                if (simbolo == " - "){
                    restante -= num * x;
                    ecuacion += num + letra + simbolo;
                } else {
                    restante += num * x;
                    ecuacion += num + letra + simbolo;
                }
                
            }
        contador++;
        if (!igual){
            if (Math.random() < 0.5 ? true : false){
                ecuacion += " = "+ restante;
                igual = true;
            }
        }

        } else if (restante == x || contador == 5){
            num = restante;

            if (igual){
                ecuacion += " = ";
            } else {
                ecuacion += " = ";
            }

            ecuacion += num;
        }
    } while (restante > 0);
    document.getElementById(id).innerHTML = ecuacion;
}

function conLetra(){
    return Math.random() < 0.5 ? true : false;
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