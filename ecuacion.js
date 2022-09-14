//variables
var resultado = document.getElementById("resultado");
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var calcular = document.getElementById('calcular');

//calculo de resultado
var flotanteDosDigitos = valor => {
    return parseInt( valor * 100) / 100;
};

var obtenerValor = function(kilos, altus) {
    var resultado = parseFloat((kilos * 10000) / (altus * altus));
    return flotanteDosDigitos(resultado);
};

//validaciones
var validarPeso = event => {
    if (peso.value == 0) {
        alert('Debe colocar su peso');
        event.preventDefault();
    } else {
        return parseFloat(peso.value);
    }
};

var validarAltura = event => {
    if (altura.value == 0) {
        alert('Debe colocar su altura');
        event.preventDefault();
    } else {
        return parseFloat(altura.value);
    }
};

//prueba
var valor = 0;
resultado.textContent = valor;

calcular.onclick = function algo(event) {
    var kg = validarPeso(event);
    var alt = validarAltura(event);
    valor = obtenerValor(kg, alt);
    resultado.textContent = valor;
}