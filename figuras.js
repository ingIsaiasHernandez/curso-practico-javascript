// Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return area = lado * lado;
}


/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro de un cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area de un cuadrado es: " + areaCuadrado + " cm^2");
*/
console.groupEnd();


//Código del triángulo

console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

/*
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("EL lado no 1 del triángulo mide: " + ladoTriangulo + " cm" +
    " EL lado no 2 del triángulo mide: " + ladoTriangulo2 + " cm" +
    " La base del triángulo mide: " + baseTriangulo + " cm");

console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro de un triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area de un triángulo es: " + areaTriangulo + " cm^2");
*/
console.groupEnd();


// Código del Circulo

console.group("Circulo");

const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}

/*
const diametroCirculo = 5;
console.log("El diametrro del Circulo mide: " + diametroCirculo + " cm");

const radioCirculo = diametroCirculo / 2;
console.log("El radio del Circulo es: " + radioCirculo + " cm");

const perimetroCirculo = diametroCirculo * PI;
console.log("El diametrro del Circulo mide: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area de un Circulo es: " + areaCirculo + " cm^2");
*/
console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}