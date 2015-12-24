function calcularIMC(){
    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;

    var altura = (metros * 100 + centimetros) / 100;

    var imc = kilos / (altura * altura);
    formulario.imc.value = imc.toFixed(2);

    if(imc <= 20){
        alert('Abaixo do Peso!')
    }else if(imc <= 25){
        alert('Peso Ideal!')
    }else if(imc <= 30){
        alert ('Sobrepeso!')
    }else if (imc <= 40) {
        alert('Obesidade Severa!')
    }else if (imc <= 50) {
        alert('Obesidade Mórbida')
    }else{
        alert('Super Obesidade!')
    }
}
