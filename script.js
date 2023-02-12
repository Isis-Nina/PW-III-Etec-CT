var Alunos = [{
    Nome: "Isis",
    Idade: 17,
    Peso: 66,
    Altura: 1.71,
    IMC: 0
},
{
    Nome: "Juremaria",
    Idade: 19,
    Peso: 74,
    Altura: 1.68,  
    IMC: 0
},
{
    Nome: "Jubileu",
    Idade: 18,
    Peso: 58,
    Altura: 1.65,
    IMC: 0
},
{
    Nome: "Lindalva",
    Idade: 17,
    Peso: 60,
    Altura: 1.67,
    IMC: 0
},
{
    Nome: "Maria",
    Idade: 18,
    Peso: 65,
    Altura: 1.70,
    IMC: 0
}]
//função para calcular o IMC de cada pessoa


function calcularIMC() {
    for (var i = 0; i < Alunos.length; i++) {
        var Aluno = Alunos[i];
Aluno.IMC = Aluno.Peso / (Aluno.Altura * Aluno.Altura);
}
};
calcularIMC();



//função para mostrar o nome e o IMC de cada pessoa 

function mostrarIMC(Alunos) {

        var texto = "";
        texto += Alunos.Nome + " - " + Alunos.IMC.toFixed(2) + "<br>";

        document.getElementById("resultado").innerHTML = texto;
        
    };  