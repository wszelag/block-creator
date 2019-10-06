//scene
const scene = new THREE.Scene();
const bgColor = new THREE.Color("rgb(230, 199, 142)");
scene.background = bgColor;
//camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//elements creator
const creator = (
  sizeX = 1,
  sizeY = 1,
  sizeZ = 1,
  posX = 0,
  posY = 0,
  posZ = 0
) => {
  const geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  const material = new THREE.MeshBasicMaterial({ color: "rgb(38, 136, 240)" });
  const element = new THREE.Mesh(geometry, material);
  element.position.x = posX;
  element.position.y = posY;
  element.position.z = posZ;
  element.rotation.x = 0.5;
  element.rotation.y = 0.5;
  scene.add(element);
};

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

document.querySelector("button").addEventListener("click", () => creator());
