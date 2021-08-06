
/*
//////////////////////////////////// Variables: var, let, const ///////////////////////////////////

var saludoVar = "Hola var";
let saludoLet = "Hola let";
const SALUDOCONST = "Hola const";

console.log(saludoVar);
console.log(saludoLet);
console.log(SALUDOCONST);

function saludar(){
    
    console.log(saludoVar);
    
    console.log(saludoLet);
    
    console.log(SALUDOCONST);

};
saludar();

//////////// Cadenas de texto (string) y plantillas de cadena de texto (template strings) //////////

const HOLA = "hola";

let cadenaTexto = "Hola como estas pa? Esta es una cadena de texto denominada en el bajo mundo como string"
let templateString = `Hola esto es una template string y tengo muchas diferencias con la cadena de texto
normal, como este el salto de linea, tambien puedo llamar variables asi: ${HOLA}.`;

console.log(templateString)

////////////////////////////////////////// Numeros (numbers) //////////////////////////////////////


let a = 2;
//Objeto Number
let b = new Number(1);
let c = 5.29;
let d = "5.23";

console.log(a, b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
// Imprime la parte entera
console.log(parseInt(c));
// Imprime la toda la variable
console.log(parseFloat(c));
console.log(typeof(d), typeof(c));
console.log(a + b);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));


///////////////////////////////////////////// Booleanos ////////////////////////////////////////////

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof(verdadero), typeof falso);

console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));

// valores que dan "true" a un if

// if (true)
// if ({})
// if ([])
// if (42)
// if ("foo")
// if (new Date())
// if (-42)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// valores que dan "false" a un if

// if (false)
// if (null)
// if (undefined)
// if (0)
// if (-0)
// if (0n)
// if (NaN)
// if ("")


////////////////////////////////////// undefined, null y NaN //////////////////////////////////////

// undefined indica que no se ha inicializado una variable y que el valor está ausente.

let indefinida;
console.log(indefinida);

// null es un valor especial que indica la ausencia de un valor.

let nulo = null;
console.log(nulo);

// NaN - Not a Number.

let noEsUnNumero = "hola" * 3;
console.log(noEsUnNumero);

////////////////////////////////////////// Funciones /////////////////////////////////////////////

// Una función es un bloque de código, autocontenido que se puede definir una vez y ejecutar en cualquier
// momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.
// Las funciones en javascript son objetos, un tipo especial de objetos:
// Se dice que las funciones son ciudadanos de primera clase por que pueden asignarse a un valor, y 
// pueden pasarse como argumentos y usarse como un valor de retorno.

// Función declarada

function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
};

// Invocación de función

estoEsUnaFuncion();
estoEsUnaFuncion();

function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    return "La funcion a retornado una cadena de texto";
}

// let valorDeFuncion = unaFuncionQueDevuelveValor();
// console.log(valorDeFuncion);

function saludar (nombre="Desconocido", edad=0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Gabriel", 24);
saludar();

// funciones declaradas vs funciones expresadas

funcionDeclarada();
function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la función sea declarada.");
}
funcionDeclarada();

// función anónima

//funcionExpresada();
const funcionExpresada = function (){
    console.log("Esto es una función expresada, es decir, una función que se ha asignado como valor a una variable, si invocamos a esta función antes de su definición JS nos dira...");
}

funcionExpresada();

///////////////////////////////////////// Arrglos (Arrays) ////////////////////////////////////////

const a = [];
const b = [1, true, "HOLA", ["A", "B", "C", [1, 2, 3]]];


console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false);   
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function(elemento, index){
    console.log(`<li id="${index}">${elemento}</li>`);
});

///////////////////////////////////////// Objetos (objets) //////////////////////////////

let a = new String();
//console.log(a);

const b = {};
console.log(b);

const c = new Object();
console.log(c);

// Dentro de un objeto a las variables se las van a llamar atributos/propiedades y a las funciones
// se las llama métodos

const gabriel = {
    nombre: "Gabriel",
    apellido: "Mendoza",
    edad: 24,
    pasatiempos: ["Correr", "Hacer ejercicios", "Practicar guitarra"],
    soltero: true,
    contacto:{
        email:"gabriel3@gmail.com",
        twitter: "@gabti",
        movil: 1122334433
    },
    saludar(){
        console.log("Hola!");
    },
    decirMiNombre(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

console.log(gabriel);
console.log(gabriel["nombre"]);
console.log(gabriel["apellido"]);
console.log(gabriel.nombre);
console.log(gabriel.apellido);
console.log(gabriel.edad);
console.log(gabriel.soltero);
console.log(gabriel.pasatiempos);
console.log(gabriel.pasatiempos[1]);
console.log(gabriel.contacto);
console.log(gabriel.contacto.twitter);
gabriel.saludar();
gabriel.decirMiNombre();

console.log(Object.keys(gabriel));
console.log(Object.values(gabriel));
console.log(gabriel.hasOwnProperty("nombre"));
console.log(gabriel.hasOwnProperty("nacimiento"));

//////////////////////////////////////////////////// Instrucciones de transferencia de control

let numeroAzar = 11; 
let condena = 10;
let nombre = "Agustin";

if(!((numeroAzar != 10) && (condena == 10))){
    console.log("El numero elegido es diferente a 10");
}else{
    console.log("El numero elegido es igual a 10");
};

if(nombre){
    console.log(nombre+" si lo muestra es true")
}else{
    console.log("false");
};

let ritmoLatido = "20s";

switch(ritmoLatido){
    case "10s":
        console.log("tenes el ritmo cardiaco bajo");
        break;
    case "15s":
        console.log("tenes el ritmo cardiaco medio");
        break;
    case "20s":
        console.log("tenes el ritmo cardiaco alto");
        break;
    default: 
        console.log("pusiste un numero inexacto");
};

for (let a = 0; a < 10; a++){
        console.log("a = "+a);
        console.log("Hola");
};

let regalos = ["perfume", "anteojos", "guantes", "cortinas", "colchon"];

for(let f = 0; f < regalos.length; f++){
    console.log(regalos[f])
}

console.log(regalos.length)

let contador = 90;

while (contador < 100){
    contador++;
    console.log(contador)
}

console.log(contador);

do {
    contador++;
} while (contador < 100);

console.log("contador do while = "+contador);

let regalosGuardados = "";

for (let f = 0; f < regalos.length; f++){

    let regalosRecibidos = regalos[f];
    
    if(regalosRecibidos == "cortinas"){
        console.log("tirar cortinas");
        continue;
    }

    regalosGuardados += " "+regalosRecibidos;
}

console.log("regalos guardados: "+regalosGuardados);

let regalosCopados = "";

for ( let f = 0; f < regalos.length; f++){

    let regalosR = regalos[f];

    if(regalosR == "cortinas"){
        console.log("dijo que no queria mas cortinas, se enoja y no recibe mas nada");
        break;
    }

    regalosCopados += " "+regalosR;

}

console.log("Regalos Conseguidos: "+regalosCopados);

console.log("----------------------------------------------------------")

let clientesTotales = 0;

function restaurantePichincha(clientesTotales){

    let clientesSatisfechos = 0;
    let comidasServidas = 0;
    let clientesInsatisfechos = 0;

    console.log("Entraron en total: "+clientesTotales+" clientes");

    for ( let f = 0; f < clientesTotales; f++ ){

        comidasServidas++;
        clientesSatisfechos++;

        if ( comidasServidas == 39 ){
            console.log("Me enojo y me voy por la 'MALA ATENCION'");
            clientesInsatisfechos++;
            clientesSatisfechos--;
            continue;
        };

    };

    console.log("Total de clientes satisfechos: "+clientesSatisfechos);
    console.log("Total de clientes insatisfechos: "+clientesInsatisfechos);

};

restaurantePichincha(100);

console.log("----------------------------------------------------------")

    let altura = window.document.getElementById("altura").value;
    let peso = window.document.getElementById("peso").value;

function calcularGordura(){

    let altura = window.document.getElementById("altura").value;
    let peso = window.document.getElementById("peso").value;
    let resultado = parseInt(altura) + parseInt(peso);

    if ((altura <= 1.70)&&((peso >= 65)&&(peso <= 70))){

        resultado = "Sos GABRIEL";
        window.document.getElementById("resultado").innerHTML=resultado;

    }else{
        
        resultado = "estamos trabajando en el resultado";
        window.document.getElementById("resultado").innerHTML=resultado;

    }

};






/////////////////////////////////////////////////////////////////////////////////////////////////////////

// undefined es un valor asignado por javascript cuando no se le da valor
// a la variable definida . (variable vacia)

let indefinida;
console.log(indefinida);

// null es un valor dado por el programador (variable vacia)

let nulo = null;
console.log(nulo)

// NaN = Not a Number. Es cuando se realizan operaciones y los datos no son 
// numeros o hay errores sintacticos

let noEsUnNumero = "hola"*3;
console.log(noEsUnNumero)



function saludar(nombre = "Desconocido", apellido = "Desconocido"){
    let resultado = `Hola me llamo ${nombre} y mi apellido es ${apellido}`
    return console.log(resultado);
};

saludar("Gabriel", "Mendoza");
saludar();

const ejemploArray = Array.of("hola","pepe", 3, 4, "hola again");
console.log(ejemploArray);

const ejemploArray2 = Array(30).fill("repeat")
console.log(ejemploArray2)

ejemploArray.push("push");
console.log(ejemploArray);

ejemploArray.pop();
console.log(ejemploArray);

ejemploArray.forEach(function (element, index){
    console.log(`<li id="${index}">${element}</li>`);
});

let a = new String("hola");
console.log(a);

let b = new Object();
console.log(b)

let objetoGabriel = {
    nombre: "Gabriel",
    apellido: "Mendoza",
    edad: 24,
    email: "gabrielleonardomendoza19@gmail.com",
    estadocivil: "soltero",
    pasatiempos: ["mirar videos de programacion", 33],
    trabajo: function (){
        console.log(`Hola me llamo ${this.nombre} y soy ${this.estadocivil}`);
    },
    numeros: {
        uno:1,
        dos:2,
        tres:3
    }
}

objetoGabriel.trabajo()
console.log(objetoGabriel.pasatiempos[0])

let celular = {
    display: "modelo jdk 1.2",
    botones: 4,
    bateria: "litio 5V",
    modelo: "samsung j2",
    miniplug:"3.5mm",
    usb: "micro b",
    funciones:{
        llamar: function(){
            console.log(`Llamando a numero Desconocido...`);
        },
        linterna: function(){
            console.log("Linterna activada");
        },
        musica: function(){
            console.log("abrir spotify")
        },
        camara: function(a){
            console.log("camara "+ a +" activada")
        }
     
    },
    aplicaciones: ["camara", "navegador", "instagram", "configuracion"]
}

celular.funciones.camara("frontal");
celular.funciones.llamar();
console.log(celular.modelo);
console.log(celular.aplicaciones);


const volar = function(a){

    if(a < 4){
        console.log("Su modelo de alasmecanicas esta obsoleto y ya no cuenta con mantenimiento. Por favor actualize por uno mas reciente. Muchas Gracias.")
    }
    if(a >= 4){
        console.log("Funcion volar activada");

        let conteo = 0;
        while(conteo <= 3){
            console.log("El vuelo comienza en " + conteo);
            conteo++;
        }
    }

}


function regalos(){ 
    let regalos = ["Cobija", "Perro", "Faso", "Celular", 43, "Pizarra"];

    for (let f = 0; f < regalos.length; f++){

        console.log(`El regalo numero ${f+1} es ${regalos[f]}`);
    }
    console.log("Eso es todo amigito");
}


try{
    if (1+1 == 2){
        console.log("Esta todo ok")
    }
    noExiste;
    console.log("Esta todo ok")

}catch(error){
    console.log("El error es "+ error)
}finally{
    console.log("Esto se ejecuta siempre y es al pedo")
}

// Destructuración. Crea variables independientes.

let cosas = ["cartuchera", "conejo", "perro", "cuñado"];

const [objeto1, objeto2, objeto3, objeto4] = cosas;

console.log(objeto1);

let otrasCosas = {
    celular: "iphone 3",
    edad: 34,
    costuras: "china",
    organizacion: "ONU"
}

const {celular, edad, costuras, organizacion} = otrasCosas;

console.log(organizacion, edad);

console.log()

let Amigos = ["Agustin", "Santiago", "Fernando", "Nicolas", "Braian"];

Amigos.pop();
console.log(Amigos);


let arrayNuevo = ["casa", "perro", "alfombra", 2];

let [house, dog, carpet, two] = arrayNuevo;

console.log(carpet);

let objetoNuevo = {
    capeta: 4, 
    lapiceras: 5, 
    frazadas : 3, 
    nombre : "Gabriel0"
};

let {capeta, lapiceras, frazadas, nombre} = objetoNuevo;

console.log(objetoNuevo);

console.log(nombre);

let nuevo = new Array("mundo", 6, 8);
console.log(nuevo);

nuevo.push(2);
console.log(nuevo);

let array2 = Array.of("colo", 3, "constantine")
console.log(array2)

array2.push(2, "conlorblind", 34, "espectro");

console.log(array2);

array2.forEach(function (element, index){
    console.log(`Palabra numero ${index+1}: ${element}`)
})

//...........................................................................................................
// Objetos literales: Agiliza el proceso de escritura

let nombre = "paco", edad = 5;

let perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function (){
        console.log("GUAU GUAU")
    }
}

let dog = {
    nombre, 
    edad,
    raza: "mestizo",
    ladrar(){
        console.log("GUAU GUAU GUAU")
    }
}

console.log(dog)

perro.ladrar()

dog.ladrar()

// Parametros REST: Captura un tercer dato de magnitud desconocida y lo aplica a la funcion tratandolo
// como un arreglo(array)

function sumar(a, b, ...c){
    let resultado = a+b;
    c.forEach(function(contenidoC){
        resultado += contenidoC;
    })
    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));

// Operador de propagacion o spreat operator: Nueva forma de sumar arreglos

let array1 = [1, 2, 3, 4, 5],
    array2 = [6, 7, 8, 9, 0];

console.log(array1, array2);

let array3 = [...array1, ...array2];
console.log(array3);

// Arrow function => funciones flecha. Las arrow function toman siempre como padre a window. 
// Las funciones declaradas respetan el ambito donde fue declarada.

function saludar(){
    console.log("Hola")
} 

saludar();

let saludarA = () => console.log("Hola Arrow Function");

saludarA();

function saludar1 (a){
    console.log(`Hola ${a}`);
}
saludar1("Pepa");


let saludarA1 = a => console.log(`Hola ${a}`);

saludarA1("Arrow");

function saludar2 (a, b){
    console.log(`Hola ${a}`);
    console.log(`Hola ${b}`);
}

saludar2("Pepa", "Pipo");

let saludarA2 = (a, b) => {
    console.log(`Hola Arrow function ${a}`)
    console.log(`Hola Arrow function ${b}`)
}
saludarA2(1, 2);    

let objetoEjemplo = {
    nombre: "Pepito",
    correr(){
        console.log("Corriendo... (esto no es una arrow function)")
    }
}

let nombres = ["gabe", "ana", "gabi", "colo", "renat"];

nombres.forEach((index, elemento)=>console.log(`Nombre ${elemento}: ${index}`));

functionDeclarada = () => console.log("Esto es una funcion declarada");

functionDeclarada();

objetoEjemplo.correr();


//---------------------------------------------------------------------------------------------------------
//Practicas

let operadorPropagacion = ["hola", "como", "estas", "tu", "en"];
let operadorPropagacion1 = ["este", "dia", "tan", "especial", "proda"];

let operadorPropagacion2 = [...operadorPropagacion, ...operadorPropagacion1]
console.log(operadorPropagacion2);

let parametrosRest = function (a, b, ...c){
    let multiplicacion = a*b;
    c.forEach(function(number){
        multiplicacion *= number;
    })
    return multiplicacion;
}

console.log(parametrosRest(2, 2, 10, 10));

let regalos = function(...r){
    let guardar = r;    
    return guardar;
}

console.log(regalos("casa", "perro", "nene", "colchon"));

let suma = function(a, b, ...c){
    let total = a + b;
    c.forEach(function(v){
        total += v;
    })

    return total;
}

console.log(suma(2, 2, 2 ,2));
console.log("Perfect");

let saludo = () => console.log("Hola");
saludo();

function saludo2 (){console.log("Hola2")}
saludo2();

let contador = 1000;

do{
    contador++
}
while(contador <= 100){

    console.log(contador)
    contador++;

}

for(let i = 0; i < 100; i++){
    console.log(i+1);
}

let contador2 = a => {

    if(a > 0){
        
        for(a; a<=100; a++){
        console.log("hola mundo "+a)
        }

    }else{
        console.log("No es un numero")
    }

}

contador2();

const numero = 34.4343;
console.log(typeof(numero));

const numeroInt = parseInt(numero);
const numeroFloat = parseFloat(numero);
console.log(numeroInt);

const numero2 = numero.toString();
console.log(typeof(numero2));



// Me encantooooooooooooooooooo!!!!!!!!!!!!!!!!!!!!!!

let consumicion = [];
let consumicionTotal = 0;

function sumaConsumicion (a, b){

    consumicionTotal += b;
    consumicion.push(a);
    console.log("se a guardado correctamente");
    
}

sumaConsumicion("Gaseosa 1/2", 90);
sumaConsumicion("rabioles con queso", 300);
sumaConsumicion("Papas a la vinagreta", 400);
sumaConsumicion("flan casero de la abuela", 150);
sumaConsumicion("vinito marca termidor riquisimo para ranchar con los pi", 50);


//let guardar = prompt("ESCRIBE ALGO");
//console.log(guardar);

console.log(consumicion);
console.log("Total a pagar: "+consumicionTotal);

console.log("Operador ternario")

let edad = 23;

let eresMayorDeEdad = (edad <= 18) ? "Eres menor de edad" : "Eres mayor de edad";

console.log(eresMayorDeEdad);

let mePerdona = false;
let laPerdono = true;

let meQuiereNoMeQuiere = ( mePerdona && laPerdono) 
? "Volvemos a estar juntos" 
: "No no volvemos a vernos nunca mas..";

console.log(meQuiereNoMeQuiere);


const AGUSTIN = {
    nombre: "Agustin Ulises Barreiro",
    edad: 24,
    trabajo: true,
    numero(){console.log(`Llamando al 1123453330...`)},
    redesSociales:{
        facebook: "rexxarelamo",
        instagram: "@algo",
        linkedin: false
    },
    amigo: true
}

const SANTIAGO = {
    nombre: "Santiago Alba",
    edad: 23,
    trabajo: true,
    numero(){console.log(`Llmando a 11232332...`)},
    redesSociales: {
        facebook: "santiagoalba",
        instagram: "@sati",
        linkedin: false
    },
    amigo: true
}

const FERNANDO = {
    nombre: "Fernando Ariel Salomon",
    edad: 23,
    trabajo: true,
    numero(){console.log(`Llamando al 1123453334...`)},
    redesSociales:{
        facebook: "salomeno",
        instagram: "@salo",
        linkedin: false
    },
    amigo: true
}

let {nombre, edad, trabajo, numero, redesSociales, amigo} = AGUSTIN;

console.log(typeof(numero));

console.log(AGUSTIN.numero());

let numero1 = 2;

console.log(typeof(numero1));

let caja=0;

for(let i = 0; i < 10; i++){
    caja =+ i;
}

console.log(caja);

let key = 23;

switch(key){
    case 0:
        console.log("hola");
        break;
    case 1:
        console.log("hola pa");
        break;
    case 2:
        console.log("hola ma");
        break;
    case 3:
        console.log("hola gans");
        break;
    default: console.log("de 0 a 3 pa");
}


const INGREDIENTES = ["Harina", "Grasa", "Aceite", "Sal", "Agua"];

function hacerEmpanadas (a){
    
    for( let i = 0; i < a.length; i++){

        console.log(`Mesclar ingrediente ${i} : ${a[i]}`);

    };

};

hacerEmpanadas(INGREDIENTES);

console.log("---------------------------------------------------------------")

INGREDIENTES.forEach((index, element)=>{console.log(`Mesclar ingrediente ${element}: ${index}`)});

// var: este es una variable que es de ambito superior. se declara y se puede usar y modificar en cualquier
// entorno incluido el valor. le cabe cualquiera.
console.log("----------------------------------------------------------------")
var conformista = "GRACIAS, ME SALVASTE";
conformista = "desconocido: las acciones de la empresa bajaron, te vamos a reducir el salario. var: BUENO, SI NO QUEDA OTRA.";
conformista=()=>{console.log("soy un idiota que hacen lo que quieren con migo y no pongo resistencia a nada. ")}
conformista = "no vales nada";

// let: yo no soy como var, yo respeto el lugar donde me han invocado, respeto el ambito donde fui invocado.

let casa = "Hola soy una casa declarada en el ambito global";

if(true){

    let casa = "Hola soy una casa declarada en el ambito local";

    console.log(casa); 
}

const objeto = {
    marca:"philips"
}
objeto.tipo = "celular";
console.log(objeto);

const colore = ["blanco", "negro", "azul", "rojo", "morado"];
colore.push("conciencia");

console.log(colore);

// const: yo no cambio mi valor de variable nunca, no importa los ambitos. para poder cambiar mi valor lo
// que tienen que hacer es dividirme y atacarme, otra no queda pa. Eso es otro mambo;

const GABRIEL = "hola tengo un valor que no es nada barato y nada despreciable";

console.log(GABRIEL);



// Estufa virtual = TERMINAR--------------------------------------------------

function iniciar(){

    let elemento = document.getElementById("canvas");
    let canvas = elemento.getContext("2d");

    canvas.fillStyle = "#990000";
    canvas.strokeStyle = "#000000"; 
    
    canvas.fillRect(625, 120, 10, 280);
    canvas.fillRect(665, 120, 10, 280);

    canvas.fillStyle = "#000000";

    canvas.fillRect(625, 440, 10, 10);
    canvas.fillRect(665, 440, 10, 10);


    //addEventListener("click", ()=>{console.log("Hello world")})

    canvas.strokeRect(600, 100, 100, 320);
    canvas.moveTo(600, 420);
    canvas.lineTo(570, 480);
    canvas.lineTo(730, 480);
    canvas.lineTo(700, 420);
    canvas.stroke(); 
    
    let vertical = 25, horizontal = 25;
    let gw = 300 / horizontal;
    let gh = 300 / vertical;
    let posicion = {
        x: 0, 
        y: 0
    };

    elemento.onmousemove = function(event) {
        posicion.x = Math.floor(event.clientX / gw);
        posicion.y = Math.floor(event.clientY / gh);


        let aca = [posicion.x, posicion.y];
        let boton = [53, 37];

        if(aca == boton){
            console.log("solo aparesco una vez")
        }
        drawSquare(posicion.x, posicion.y, "blue");

        console.log(aca);
    }

    elemento.onmouseup = function(event) {
        drawSquare(posicion.x, posicion.y, "red");
    }

    function drawSquare(x, y, color) {
        var rx = x * gw;
        var ry = y * gh;
        canvas.fillRect(rx, ry, gw, gh);
    }

    function fillBackground() {
        canvas.fillStyle = '#000000';
    }
    

    // Internet
    
    var vertical = 10, horizontal = 10;
    var gw = 300 / horizontal;
    var gh = 300 / vertical;
    var posicion = {
        x: 0, 
        y: 0
    };

    window.onload = function() {

        elemento.onmousemove = function(event) {
            posicion.x = Math.floor(event.clientX / gw);
            posicion.y = Math.floor(event.clientY / gh);
            fillBackground();
            drawSquare(posicion.x, posicion.y, "blue");
        }

        elemento.onmouseup = function(event) {
            drawSquare(posicion.x, posicion.y, "red");
        }

        fillBackground();
    }

    function drawSquare(x, y, color) {
        canvas.fillStyle = color;
        var rx = x * gw;
        var ry = y * gh;
        canvas.fillRect(rx, ry, gw, gh);
    }

    function fillBackground() {
        canvas.fillStyle = '#000';
        canvas.fillRect(0, 0, 300, 300);
    }
    
}

window.addEventListener("load", iniciar);
*/

