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
