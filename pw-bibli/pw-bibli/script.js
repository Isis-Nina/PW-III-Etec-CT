// Configuração da cena

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(900, 450);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Criando um material (cor) vermelho para o círculo
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Criando um círculo
const radius = 2;
const segments = 45;
const circleGeometry = new THREE.CircleGeometry(radius, segments);
const circle = new THREE.Mesh(circleGeometry, material);
scene.add(circle);

// Posicionando a câmera
camera.position.z = 5;

// Função de animação
function animate() {
  requestAnimationFrame(animate);
  circle.rotation.x += 0.01;
  circle.rotation.y += 0.01;
  renderer.render(scene, camera);
}


// Iniciando a animação
animate();
