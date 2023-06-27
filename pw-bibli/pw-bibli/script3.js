// Configuração básica da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 400);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Criando materiais para as formas geométricas
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Criando um cubo
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -2;
scene.add(cube);

// Criando um cilindro
const cylinderGeometry = new THREE.CylinderGeometry(0.7, 0.7, 4, 82);
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.x = 1,5;
scene.add(cylinder);

// Criando uma esfera
const sphereGeometry = new THREE.SphereGeometry(1, 15, 30);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 5;
scene.add(sphere);
 


// Posicionando a câmera
camera.position.z = 5;

// Função de animação
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Iniciando a animação
animate();
