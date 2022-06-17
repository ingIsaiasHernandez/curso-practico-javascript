// const precioOriginal = 120;

// const descuento = 18;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento,
// });

function porcentajePrecioDescuento(precio,descuento){
    
    const porcentajeConDescuento = 100 - descuento;

    const precioFinal = (precio * porcentajeConDescuento)/100;
    
    return precioFinal;
   
}


function descuentoProducto(){

    const inputPrice  = document.getElementById("InputPrecio");
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById("InputDescuento");
    const valueDiscount = inputDiscount.value;

    const total = porcentajePrecioDescuento(valuePrice,valueDiscount);

    const ResultP = document.getElementById("resultP");

    ResultP.innerText = "El precio con descuento son : $" + total;

}
