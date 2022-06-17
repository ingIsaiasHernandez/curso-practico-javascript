function  calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }

    );

    

    const promedio = sumaLista / lista.length;

    return promedio;
}

const lista = [
    100,
    200,
    500,
    400000000

];


// La parseInt()función analiza un argumento de cadena y devuelve un número 
// entero de la raíz especificada (la base en los sistemas numéricos 
// matemáticos).
const mitadLista1 =  parseInt(lista.length/2);

function esPar(numerito){
 if(numerito % 2 === 0){
    return true;
 }else{
    return false;
 }
}

let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista1 - 1];
    const elemento2 = lista[mitadLista1];
    
    const promedioElementos1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElementos1y2;
}else{
    mediana = lista[mitadLista1];
    
}