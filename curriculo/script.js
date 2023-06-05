const form = document.querySelector('form');
const curriculo = document.querySelector('#curriculo');
var nomeCurriculo;
form.addEventListener('submit', function(event) {
  event.preventDefault();
  //dados preenchidos
  const nome = document.getElementById('nome').value;

  const endereco = document.getElementById('endereco').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  const cep = document.getElementById('cep').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const objetivo = document.getElementById('objetivo').value;
  const qualificacao = document.getElementById('qualificacao').value;
  const experiencia = document.getElementById('experiencia').value;
  const formacao = document.getElementById('formacao').value;
  const cursosAdicionais = document.getElementById('cursosAdicionais').value;
  const idiomas = document.getElementById('idiomas').value;

  //campos curriculo
  nomeCurriculo = document.getElementById( 'nomeCv');

  const enderecoCurriculo = document.getElementById('enderecoCv');
  const cidadeCurriculo = document.getElementById('cidadeCv');
  const estadoCurriculo = document.getElementById('estadoCv');
  const cepCurriculo = document.getElementById('cepCv');
  const telefoneCurriculo = document.getElementById('telefoneCv');
  const emailCurriculo = document.getElementById('emailCv');
  const objetivoCurriculo = document.getElementById('objetivoCv');
  const qualificacaoCurriculo = document.getElementById('qualificacaoCv');
  const experienciaCurriculo = document.getElementById('experienciaCv');
  const formacaoCurriculo = document.getElementById('formacaoCv');
  const cursosAdicionaisCurriculo = document.getElementById('cursosCv');
  const idiomasCurriculo = document.getElementById('idiomasCv');

  //preenchendo campos
  nomeCurriculo.innerHTML = nome;
  enderecoCurriculo.innerHTML = endereco;
  cidadeCurriculo.innerHTML = cidade;
  estadoCurriculo.innerHTML = estado;
  cepCurriculo.innerHTML = cep;
  telefoneCurriculo.innerHTML = telefone;
  emailCurriculo.innerHTML = email;
  objetivoCurriculo.textContent = objetivo;
  qualificacaoCurriculo.innerHTML = qualificacao;
  experienciaCurriculo.innerHTML = experiencia;
  formacaoCurriculo.innerHTML = formacao;
  cursosAdicionaisCurriculo.innerHTML = cursosAdicionais;
  idiomasCurriculo.innerHTML = idiomas;
  
})





function gerarPDF() {
  var container = document.getElementById('container');
  
  // Obtenha o conteúdo HTML do container
  var html = container.innerHTML;
  
  // Crie um objeto PDF.js
  var pdfDoc = new window.jsPDF();
  
  // Adicione o conteúdo HTML ao PDF
  pdfDoc.fromHTML(html, 15, 15, {
    'width': 170
  });
  
  
  // Salve ou abra o PDF gerado
  pdfDoc.save('curriculo.pdf');
}


var btnGerar = document.getElementById("btnGerar")

btnGerar.addEventListener("click", gerarPdf)

////////////////////////////////////////////////

// Carregar o PDF
PDFJS.getDocument('curriculo.pdf').then(function(pdf) {
  // Obter a primeira página do PDF
  pdf.getPage(1).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport({ scale: scale });

    // Criar um elemento <canvas> para renderizar a página PDF
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Adicionar o canvas ao contêiner
    var container = document.getElementById('container');
    container.appendChild(canvas);

    // Renderizar a página PDF no canvas
    page.render({
      canvasContext: context,
      viewport: viewport

    
})
      // Defina a função para carregar o arquivo CSS
function loadCSS(url) {
  var link = document.createElement('pdf.css');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

// Carregue o arquivo CSS
loadCSS('pdf.css');

      
    });
  });

