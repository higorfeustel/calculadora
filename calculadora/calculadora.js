function calculo() {
    var operador = document.querySelector('select[name="operacao"]').value
    var num1 = parseFloat(document.getElementById('primeiro').value)
    var num2 = parseFloat(document.getElementById('segundo').value)
    var resultado

    switch (operador) {
        case "+":
            resultado = num1 + num2
            break;

        case "-":
            resultado = num1 - num2
            break;

        case "*":
            resultado = num1 * num2
            break;
   
        case "/":
            resultado = num1 / num2
            break;
        default:
            resultado = "operação-inválida"
    }

    document.getElementById('mostra-resultado').textContent = resultado
    console.log(operador)
}
