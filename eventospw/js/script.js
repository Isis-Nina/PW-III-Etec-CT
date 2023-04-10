var tEvento = document.getElementById("evento");
var descEvento = document.getElementById("descEvento");
var boxExemplo = document.getElementById("boxExemplo");


function duploclick() {
    alert("Você é incrível!")
}
//-----------------------------------


function down(){
    document.getElementById("status").innerHTML="keyDown";
   }
   
   function up(){
       document.getElementById("status").innerHTML="KeyUP";
   }


//-----------------------------------

function Over(obj){
    obj.innerHTML = "🙂"
}

function Out(obj){
    obj.innerHTML = "Passe o mouse aqui"
}

//-----------------------------------


function mudanca(){
    var nome = document.getElementById("name");
    nome.value = nome.value.toUpperCase();
}

//-----------------------------------


function alerta() {
    alert("Olá, você clicou no botão!")
}


//-----------------------------------


function mudafundo(){

    document.getElementById("name").style.backgroundColor = "pink";
 
     
 }

//-----------------------------------

function mudacor(){

    var nome = document.getElementById("name");

    nome.style.color = "blue"
}

//-----------------------------------

function alerta(){
    alert("Mensagem enviada!")
}




