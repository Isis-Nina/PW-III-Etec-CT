function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    
    }
}
    

function calcularIMC() {
    var nome = document.getElementById("nome").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (nome === "" || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (altura === 0) {
        alert("A altura deve ser maior que zero.");
        return;
    }

    var imc = peso / (altura * altura);
    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    var resultado = nome + ", seu IMC é " + imc.toFixed(2) + ", e sua classificação é: " + classificacao;
    document.getElementById("resultado").innerHTML = resultado;
}
