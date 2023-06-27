// Configuração básica da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 400);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Criando um material rosa para o retângulo
const material = new THREE.MeshBasicMaterial({ color: 0xFF69B4 });

// Criando um retângulo
const width = 5;
const height = 4;
const depth = 0.3;
const rectangleGeometry = new THREE.BoxGeometry(width, height, depth);
const rectangle = new THREE.Mesh(rectangleGeometry, material);
scene.add(rectangle);

// Posicionando o retângulo
rectangle.position.x = 0;
rectangle.position.y = 0;

// Posicionando a câmera
camera.position.z = 5;

// Função de animação
function animate() {
  requestAnimationFrame(animate);
  rectangle.rotation.x += 0.01;
  rectangle.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Iniciando a animação
animate();
