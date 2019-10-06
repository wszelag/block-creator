//<<--settings -->>
const cameraStartedPosition = 30;
let cameraSpeedZ = 1;
const cameraRotationSpeed = 0.0085;
const bgColor = new THREE.Color("rgb(230, 199, 142)");
let offsetX = null;
let offsetY = null;
//<-scene
const scene = new THREE.Scene();
scene.background = bgColor;
//<-camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,
  1000
);
camera.position.z = cameraStartedPosition;
//<-renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//<<--block creator function -->>
const creator = () => {
  const sizeX = Math.random() * 5;
  const sizeY = Math.random() * 5;
  const sizeZ = Math.random() * 5;
  const posX = Math.random() * 60 - 30;
  const posY = Math.random() * 20 - 10;
  const posZ = Math.random() * 20 - 10;
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  const material = new THREE.MeshBasicMaterial({
    color: `rgb(${red}, ${green}, ${blue})`
  });
  const element = new THREE.Mesh(geometry, material);
  element.position.x = posX;
  element.position.y = posY;
  element.position.z = posZ;
  element.rotation.x = 0.5;
  element.rotation.y = 0.5;
  scene.add(element);
};

//<<--camera move function -->>
const cameraMove = (e, changePositionZ) => {
  if (changePositionZ) {
    //<- handle mousewheel event
    if (e.deltaY < 0) {
      if (camera.position.z <= 3) return;
      camera.position.z -= cameraSpeedZ;
    } else if (e.deltaY > 0) {
      if (camera.position.z >= 40) return;
      camera.position.z += cameraSpeedZ;
    }
  } else {
    //handle mousemove event
    if (e.offsetX > offsetX) {
      if (camera.rotation.y > 1.5) return;
      camera.rotation.y += cameraRotationSpeed;
    } else if (e.offsetX < offsetX) {
      if (camera.rotation.y < -1.5) return;
      camera.rotation.y -= cameraRotationSpeed;
    }

    if (e.offsetY < offsetY) {
      camera.rotation.x -= cameraRotationSpeed;
    } else if (e.offsetY > offsetY) {
      camera.rotation.x += cameraRotationSpeed;
    }
  }

  offsetX = e.offsetX;
  offsetY = e.offsetY;
};

//<<--init, events-->>
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

document.querySelector("button").addEventListener("click", () => {
  creator();
});
window.addEventListener("mousewheel", e => cameraMove(e, true));
window.addEventListener("mousemove", e => cameraMove(e, false));
