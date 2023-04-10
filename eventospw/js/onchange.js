function mudanca(){

    var nome = document.getElementById("name");

    nome.value = nome.value.toUpperCase();

<input
type = "name"
onchange = "myHandler();"
onkeypress = "this.onchange();"
onpaste = "this.onchange();"
oninput = "this.onchange();"
/>


}


