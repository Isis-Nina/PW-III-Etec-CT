export default class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.imc = 0;
        this.categoriaIMC = "N/A";
    }
    calcularIMC() {
        this.imc = this.peso / (this.altura * this.altura);
    }
    categorizarIMC() {
        if (this.imc < 18.5) {
            this.categoriaIMC = "Abaixo do peso!";
        } else if (this.imc >= 18.5 && this.imc < 25) {
            this.categoriaIMC = "Peso normal!";
        } else if (this.imc >= 25 && this.imc < 30) {
            this.categoriaIMC = "Sobrepeso!";
        } else if (this.imc >= 30 && this.imc < 35) {
            this.categoriaIMC = "Obesidade grau I !";
        } else if (this.imc >= 35 && this.imc < 40) {
            this.categoriaIMC = "Obesidade grau II !";
        } else {
            this.categoriaIMC = "Obesidade grau III !";
        }
    }
}

export let alunos = [

    {nome: "Isis", idade: 17, peso: 66, altura: 1.71, imc: 0, categoriaIMC: "N/A" },
    { nome: "Juremaria", idade: 19, peso: 74, altura: 1.68, imc: 0, categoriaIMC: "N/A" },
    { nome: "Jubileu", idade: 18, peso: 58, altura: 1.65, imc: 0, categoriaIMC: "N/A" },
    { nome: "Maryliza", idade: 19, peso: 69, altura: 1.65, imc: 0, categoriaIMC: "N/A" },
    { nome: "Lindalva", idade: 17, peso: 60, altura: 1.67, imc: 0, categoriaIMC: "N/A" },
    { nome: "Maria das Dores", idade: 18, peso: 65, altura: 1.70, imc: 0, categoriaIMC: "N/A" },
    { nome: "Cleide", idade: 19, peso: 70, altura: 1.65, imc: 0, categoriaIMC: "N/A" },
    {Nome: "Raimunda",Idade: 17, Peso: 60, Altura: 1.67, IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Faceboucson",Idade: 80,Peso: 75,Altura: 1.83,IMC: 0,CategoriaIMC: "N/A" },
    {Nome: "Tabajaze",Idade: 40,Peso: 100,Altura: 1.57,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Risolenia",Idade: 62,Peso: 120,Altura: 1.47,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Escrevanilda",Idade: 26,Peso: 72,Altura: 1.88,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Jabinubia",Idade: 52,Peso: 79,Altura: 1.42,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Robervaldo",Idade: 38,Peso: 98,Altura: 1.75,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Iranilda",Idade: 78,Peso: 83,Altura: 1.69,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Akifusia",Idade: 35,Peso: 73,Altura: 1.76,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Alcelyne",Idade: 12,Peso: 38,Altura: 1.37,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Clenione",Idade: 15,Peso: 60,Altura: 1.37,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Doylson",Idade: 27,Peso: 69,Altura: 1.90,IMC: 0,CategoriaIMC: "N/A"},
    {Nome: "Gilineomel",Idade: 10,Peso: 40,Altura: 1.25,IMC: 0,CategoriaIMC: "N/A"}
];      

 
   