const number = parseFloat(document.getElementById("catidadCompra").value)

function compraCamisas() {
    let number = parseFloat(document.getElementById("catidadCompra").value)
    let resultElement = document.getElementById("mensaje")

    if (number > 5) {
        resultElement.textContent = "La compra se debe pagar con tarjeta de credito porfavor."

    } else if (number <= 5 && number > 0) {
        resultElement.textContent = "La compra debe pagarse en efectivo porfavor."
    } else {
        resultElement.textContent = "Si deseas realizar alguna compra debe ser minima de 1 unidad."
    }

}






