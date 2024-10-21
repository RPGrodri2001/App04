/*
//Principales tipos de variables 
//Number(Númericas) 
var x = 4;
//String(De texto) 
let text = 'esta es una variable de texto';
//Boolean(De falso o verdadero)
var bv = true;
//Array(Arreglos, listas, objetos)
let av = [23, 'pedro', false];
//const (Las constantes no cambiarn de valor, almacenan valores fijos)
const PROGRAM_ID = 1;
//Definir variable tipo objeto para almacenar la etiqueta <textarea> del html
let tav = document.getElementById('ouputTest');
tav.innerHTML = "Hola Como estas?, aqui verás los resultados, por defecto te muestro lo que tiene el array en su tercera posicion: \n" + av[2] + " \n Y el valor de x: \n" + x;
*/

let namesAndSurnames = "Carlos soto";
var x = '2022';
let precioproducto = 0;
var esMayorDeEdad = true;
let persona = [20, 'Juan Perez', true, 1, 68];
const PROGRAM_NAME = "APPLICACION DE LOGICA DE PROGRAMACION";

var tav = document.getElementById('ouput');
tav.innerHTML = x;

/*
 * Las funciones son un bloque de codigo que tiene la responsabilidad de llevar a cabo una tarea concreata en particular,
Nos sirven para dividir nuestro programam en bloques pequeños y hacerlo mas sencillo y facil de comprender
En algunos leguajes tambien se conocen como metodos.
LAs funciones internamente hacen diferentes operaciones y pueden usar variables y constantes, pero tambien pueden recibir como parametros
otras varaibles con valores.
Este es un ejemplo de una funcion con parametros:

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
Al igual que las variables, las funciones toman sentido cuando las utilizamos, cuando las llamamos desde algun sitio como un boton por ejemplo.
 */

function changeVariable() {
  x = prompt('Dame el nuevo valor');
  tav.innerHTML = x;
}


/*
//principales Operadores
//Operadores aritmeticos
//Asignacion de valores a una variable
let iv = 3;
//Sumar o concatenar (+)
x = 3 + 2;
x += 5
x = x + PROGRAM_ID;
text = text + "Otro texto";
//Multiplicar
let mv = 4 * 3;
//dividir 
let dv = x / 3;
*/

let operadoresMath = (5 + 12 - 6) * (8 / (2 ** 3));

/*Operadores booleanos
//Conjunction AND (&&), el resultado de todas las expresiones tiene que ser verdaderas para que entre en el bloque del si
//Disjunction OR (||), por lo menos el resultado de una expresion tiene que ser verdadera para que entre en el bloque del si
//Negacion NOT != sirve para cambiarle el valor booleano a un resultado
*/

var edadPersona = 16;
var peso = 0;
let nacional = false;
const PRECIO = 20;
let estatura = 0;


function evaluarEdad() { 
 edadPersona =  parseInt(prompt('Porfavor Ingresa tu edad'));
  if (edadPersona >= 18) {
    alert('La persona es mayor de edad');
    evaluarRequisitosMinimos();
  } else {
    alert('La persona no es mayor de edad');
    return;
  }
}


function evaluarRequisitosMinimos() {
peso = parseFloat(prompt('Dame el peso de la persona'));
  if (edadPersona >= 16 && edadPersona <= 40 && peso >= 20) {
    alert('El candidato cumple con los requisitos y puede ser admitido');
    calcularCostoInscripcion();
    evaluarCategoria();
  } else {
    alert('El candidato no cumple con los requisitos mínimos');
    return;
  }
  alert('tu proceso de selección ha finalizado con éxito');
}

function calcularCostoInscripcion() {
  let respuestaNacionalidad = prompt('Si eres nacional responde si, de lo contrario responde no');
  if(respuestaNacionalidad ==='si'){
    nacional = true;
  }else{
    nacional = false;
  }
  if ((edadPersona >= 20 && edadPersona <= 30) || nacional === true) {
    let precioConDescuento = 20 - (20 * 10 / 100);
    alert('El precio a pagar por ser nacional o estar en el rango de edad de 20 a 30 años es: ' + precioConDescuento);
  } else {
    alert('El precio a pagar por ser extranjero : ' + PRECIO);
  }
}

function evaluarCategoria() {
  estatura = parseFloat(prompt('Pro favor ingresa tu estatura'));
  if (estatura != 1.68) {
    alert('Lo sentimos para practicar basketball solo se admiten personas con una estura igual a 1.68');
  }else{
    alert('Felicidades has sido adminitod en basketBall');
  }
}
