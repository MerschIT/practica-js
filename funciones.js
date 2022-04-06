// SUMANDO NUMEROS

// let numeroA = 2;
// numeroA = numeroA + 10;

// numeroA += 22;

// alert(numeroA);

// ****************************

// CONCATENANDO TEXTOS

// let usuario;
// usuario = "Jack";
// let unTexto = "Hola ";
// unTexto += usuario + " bienvenido.";
// alert(unTexto);

//******************************
// BARRA PARA HACER ESCAPE DE CARACTERES '' Y ""
// let unTexto = 'Este \'libro\' es el mejor que he leido';
// alert(unTexto);

// *****************************
// SALDO DE LINEA
// let unTexto = 'Felicidad no es hacer lo que uno quiere\r\n';
// unTexto = unTexto + 'sino querer lo que uno hace.';
// alert(unTexto);

// *****************************
// ARRAY
// let variable = "El pajaro vio el cielo.";
// let unArray = ['red', 'blue', 'yellow', variable];
// alert("El array 0 es: " + unArray[0]);

// *****************************
// BUCLES

// *** IF / ELSE ***
// let unaVariable = 1;
// let autorizado = 'SI'
// if (unaVariable > 10 && autorizado == 'SI'){
//     alert('La variable vale ' + unaVariable + '. Está autorizado.');
// } else {
//     alert('La variable vale ' + unaVariable + '. No está autorizado.');
// };

// *** SWITCH CASE ***
// let unaVariable = 8;
// switch(unaVariable){
//     case 5:
//         alert('Es un 5');
//         break;
//     case 6:
//         alert('Es un 6');
//         break;
//     case 7:
//         alert('Es un 7');
//         break;
//     case 8:
//         alert('Es un 8');
//         break;
// }

// *** BUCLE FOR ***
// let total = 0;
// let x = 0;
// for (x = 0; x < 5; x++){
//     total += 10;
// }
// alert('El total es '+ total);

// let unArray = [1, 4, 5, 5,6,4,23,2,43,56,7,4,2,1,4,65,656,5,665,];
// let longitudArray = unArray.length - 1;
// let x = 0;
// let total = 0;

// for (x = 0; x <= longitudArray; x++){
//     total += unArray[x];
// }

// alert(total);

// *** BUCLE WHILE ***
// let contador = 0;
// while (contador < 100){
//     contador++;
// };
//
// alert(contador);

// TRANSFERENCIA DE CONTROL: CONTINUE
// let x = 0; 
// let textoFinal = '';
// let unTexto = ['Una ', 'flor ', 'muy ', 'salvaje y ', 'azul.'];

// for (x = 0; x <= 4; x++ ){
//     if (x===2 || x===3 ){
//         continue;
//     }
//     textoFinal += unTexto[x];
// };
//
// alert(textoFinal);

// TRANSFERENCIA DE CONTROL: BREAK
// let x = 0; 
// let textoFinal = '';
// let unTexto = ['Una ', 'flor ', 'muy ', 'salvaje y ', 'azul.'];

// for (x = 0; x <= 4; x++ ){
//     if (x===2 || x===3 ){
//         break;
//     }
//     textoFinal += unTexto[x];
// };

// alert(textoFinal);

// ************ FUNCIONES ***************
// a = 99;
// b = 6784334353;
//
// function calculos(parametro1, parametro2){
//     total = parametro1 + 10 + parametro2;
//     alert(total);
//
// };
//
// function mensaje(){
//     alert('Gracias por usar nuestra web.');
// }
//
// calculos('El resultado es: ' + a, b + '. Presione en el botón',);
// mensaje();

// ***** AMBITO GLOBAL / LOCAL *****
// let variableGlobal = 5;
// function mifuncion(){
//     let variableLocal = "El valor es ";
//     alert(variableLocal + variableGlobal); // "El valor es 5"
//     }
// mifuncion();
// alert(variableLocal); // Da error porque es una variable local que existe solo dentro de la funcion

//***************** OBJETOS ******************
// let persona = {
//     nombre: 'Juan',
//     edad: 30,
// };


// persona.nombre = 'Pablo';
// persona.trabajo = 'Pintor';
// persona.moto = 'Motocicleta';


// let mensaje = 'Hola ' + persona.nombre + '.\r \n';
// mensaje += 'Veo que tienes ' + persona.edad + ' años.\r\n';
// mensaje += '¿Quieres trabajar como ' + persona.trabajo + ' con nosotros?\r\n';

// alert(mensaje);

// ***** METODOS (UNA FUNCION DENTRO DE UN OBJETO) *****

// let persona = {
//     nombre: 'Juan',
//     edad: 30,
//     mostrarNombre: function(){
//         alert('Nombre ' + persona.nombre);
//     },
//     cambiarNombre: function(nombreNuevo){
//         persona.nombre = nombreNuevo;
//     }
// };

// persona.mostrarNombre();
// persona.cambiarNombre('Michael');
// persona.mostrarNombre();

// *** THIS --> Simboliza el nombre del objeto. No importa si este cambia de nombre ***
// let persona = {
//     nombre: 'José',
//     mostrarDatos: function(){
//         mensaje = 'Hola ' + this.nombre;
//         alert(mensaje);
//     }
// };

// persona.mostrarDatos();

//***** CONSTRUCTORES - Se usan para crear una copia del objeto  *****

// let constructor = function(){
//     let obj = {
//         nombre: 'José empleado',
//         mostrarDatos: function(){
//             mensaje = 'Hola ' + this.nombre;
//             alert(mensaje);
//         }
//     };
//     return obj;
// }

// let empleado = constructor();
// empleado.mostrarDatos();

// *** CREANDO VARIOS OBJETOS A LA VEZ ***
let constructor = function(nombreEmpleado){
    let obj = {
        nombre: nombreEmpleado,
        mostrarDatos: function(){
            mensaje = 'Hola ' + this.nombre;
            alert(mensaje);
        }
    };
    return obj;
}

let empleado1 = constructor('Carlos');
let empleado2 = constructor('Miguel');
let empleado3 = constructor('Raul');
alert('Hola ' + empleado1.nombre + ', ' + empleado2.nombre + ' y ' + empleado3.nombre );