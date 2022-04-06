//variables
var resultado = document.getElementById("resultado");
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var calcular = document.getElementById('calcular');

//eventos
var obtenerValor = function(kilos, altus) {
    var res = parseFloat((kilos * 10000) / (altus * altus));
    var val = parseInt((res * 100));
    res = val / 100;
    return res;
}

var validarPeso = function(e) {
    if (peso.value == 0) {
        alert('Debe colocar su peso');
        e.preventDefault();
    } else {
        return parseFloat(peso.value);
    }
}

var validarAltura = function(e) {
    if (altura.value == 0) {
        alert('Debe colocar su altura');
        e.preventDefault();
    } else {
        return parseFloat(altura.value);
    }
}

//prueba
var valor = 0;
resultado.textContent = valor;

calcular.onclick = function algo(e) {
    var kg = validarPeso(e);
    var alt = validarAltura(e);
    valor = obtenerValor(kg, alt);
    resultado.textContent = valor;
}