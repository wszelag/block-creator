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
