var Alunos = [{
    Nome: "Isis",
    Idade: 17,
    Peso: 66,
    Altura: 1.71,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Juremaria",
    Idade: 19,
    Peso: 74,
    Altura: 1.68,  
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Jubileu",
    Idade: 18,
    Peso: 58,
    Altura: 1.65,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Maryliza",
    Idade: 19,
    Peso: 69,
    Altura: 1.65,
    IMC: 0,
    CategoriaIMC: "N/A"

},
{
    Nome: "Lindalva",
    Idade: 17,
    Peso: 60,
    Altura: 1.67,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{

    Nome: "Maria das Dores",
    Idade: 18,
    Peso: 65,
    Altura: 1.70,
    IMC: 0,
    CategoriaIMC: "N/A"

},
{
    Nome: "Cleide",
    Idade: 19,
    Peso: 70,
    Altura: 1.65,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Raimunda",
    Idade: 17,
    Peso: 60,
    Altura: 1.67,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Faceboucson",
    Idade: 80,
    Peso: 75,
    Altura: 1.83,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Tabajaze",
    Idade: 40,
    Peso: 100,
    Altura: 1.57,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Risolenia",
    Idade: 62,
    Peso: 120,
    Altura: 1.47,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Escrevanilda",
    Idade: 26,
    Peso: 72,
    Altura: 1.88,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Jabinubia",
    Idade: 52,
    Peso: 79,
    Altura: 1.42,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Robervaldo",
    Idade: 38,
    Peso: 98,
    Altura: 1.75,
    IMC: 0,
    CategoriaIMC: "N/A"

},
{
    Nome: "Iranilda",
    Idade: 78,
    Peso: 83,
    Altura: 1.69,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Akifusia",
    Idade: 35,
    Peso: 73,
    Altura: 1.76,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Alcelyne",
    Idade: 12,
    Peso: 38,
    Altura: 1.37,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Clenione",
    Idade: 15,
    Peso: 60,
    Altura: 1.37,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Doylson",
    Idade: 27,
    Peso: 69,
    Altura: 1.90,
    IMC: 0,
    CategoriaIMC: "N/A"
},
{
    Nome: "Gilineomel",
    Idade: 10,
    Peso: 40,
    Altura: 1.25,
    IMC: 0,
    CategoriaIMC: "N/A"
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

    
//função para calcular o IMC com o objeto Pessoas e editar o IMC de cada pessoa
function calcularIMC() {
    for (var i = 0; i < Alunos.length; i++) {
        //Calculando o IMC de cada pessoa
        var pessoa = Alunos[i];
        pessoa.IMC = pessoa.Peso / (pessoa.Altura * pessoa.Altura);    

        //Categorizando o IMC de cada pessoa
        if (pessoa.IMC < 18.5) {
            pessoa.CategoriaIMC = "Abaixo do peso!";
        } else if (pessoa.IMC >= 18.5 && pessoa.IMC < 25) {
            pessoa.CategoriaIMC = "Peso normal!";
        } else if (pessoa.IMC >= 25 && pessoa.IMC < 30) {
            pessoa.CategoriaIMC = "Sobrepeso!";
        } else if (pessoa.IMC >= 30 && pessoa.IMC < 35) {
            pessoa.CategoriaIMC = "Obesidade grau I !";
        } else if (pessoa.IMC >= 35 && pessoa.IMC < 40) {
            pessoa.CategoriaIMC = "Obesidade grau II !";
        } else {
            pessoa.CategoriaIMC = "Obesidade grau III !";
        }
    }
};

calcularIMC();

//função para mostrar o nome e o IMC de cada pessoa de acordo com o parâmetro passado
function mostrarIMC() {
    var Numero = document.getElementById("Numero").value;
    Numero--;
    var Pessoa = Alunos[Numero];
    if ( Numero < 0 || Numero > 19){
        document.getElementById("resultado").innerHTML = "Número inválido!";
    }else{
        var texto = "";
        texto += Pessoa.Nome + " - " + Pessoa.IMC.toFixed(2) + " Categorizado(a): "+ Pessoa.CategoriaIMC +"<br>";
        document.getElementById("resultado").innerHTML = texto;
    };
};

function separarPorCategoria(){
    //vetor com a quantidade de cada pessoa por categoria
    var tabela = {
        "Abaixo do peso!": 0,
        "Peso normal!": 0,
        "Sobrepeso!": 0,
        "Obesidade grau I !": 0,
        "Obesidade grau II !": 0,
        "Obesidade grau III !": 0
    };
    //Contagem de cada pessoa por categoria
    for (var i = 0; i < Alunos.length; i++) {
        var pessoa = Alunos[i];
        tabela[pessoa.CategoriaIMC] += 1;
    }

    
    //Mostrar a tabela
    var texto = "";
    for (var categoria in tabela) {
        texto += categoria + ": " + tabela[categoria] + "<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
};

//Mostrar todos em uma lista.
function mostrarTodos(){
    var texto = "";
    for (var i = 0; i < Alunos.length; i++) {
        var lugar = i + 1;
        var pessoa = Alunos[i];
        texto += lugar + " | " + pessoa.Nome + " - " + pessoa.IMC.toFixed(2) + " Categorizado(a): "+ pessoa.CategoriaIMC +"<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
};