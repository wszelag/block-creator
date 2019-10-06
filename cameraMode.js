const changeCamera = () => {
  const mode = document.querySelector(".camera-mode").value;
  switch (mode) {
    case "not move":
      cameraSpeedZ = 0;
      cameraRotationSpeed = 0;
      break;
    case "manually":
      cameraSpeedZ = 1;
      cameraRotationSpeed = 0.0085;
      break;
    case "automatic":
      cameraSpeedZ = 0;
      cameraRotationSpeed = 0;
      automaticCamera();
      break;
    default:
      null;
  }
};

automaticCamera = () => {
  //in progress
};

document.querySelector(".camera-reset").addEventListener("click", () => {
  camera.position.z = cameraStartedPosition;
  camera.rotation.x = 0;
  camera.rotation.z = 0;
  camera.rotation.y = 0;
});
