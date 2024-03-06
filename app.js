let numeroSecreto= 0;  //console.log("Numero secreto: " + numeroSecreto);  // La forma correcta 
let intentos= 0;
let numeroMaximo= 10;
let listaNumerosSorteados= [];
condicionesIniciales();


function asignarTextoElemento(element, text){
let llamadoDeElement= document.querySelector(element);
llamadoDeElement.innerHTML= text;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Welcome to the secret game!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto(); console.log("Numero secreto: " + numeroSecreto);
    intentos =1;
}

function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
    //console.log ("Numero de usuario:"+numeroUsuario);
    console.log ('numero de intentos: ', intentos);

    //si acierta el ususario
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste con el numero secreto en ${intentos} ${(intentos ==1)? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        clearBox();
    }
} 
function generarNumeroSecreto(){
   let numeroGenerado=  Math.floor(Math.random()*numeroMaximo)+1; //ya no retornamos esto directamente
   //console.log('numeroGenerado: ',numeroGenerado);//mismo numero dado a *numeroSecreto*
   console.log (listaNumerosSorteados);
   //Ya sorteamos todos los numeros??
   if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Haz llegado al limite de numeros secretos');
   } else {//de lo contrario seguimos con el juego
    //Si el numero generado esta includio en la lista: hacemos una operacion, sino hacemos otra.
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();//Justo en esta parte se retorna la misma funcion
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   }
} 
//console.log ('numero secreto: ', generarNumeroSecreto()); aqui se generó otro numero aleatorio

function clearBox(){
    document.querySelector('#valorUsuario').value= ''; //ahora no tiene ningun valor, se limpió
}
/****************************************************/
function playAgain() {
    //limpiar la caja
    clearBox();
    //Indicar el mensaje de inicio (intervalo del 1 al 10)
    //Generar el nummero aleatorio (esta en condicionesIniciales)
    //Inicializar el numero de intentos (esta en condicionesIniciales)
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}