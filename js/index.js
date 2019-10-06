//<<--init, events-->>
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  changeCamera();
};
animate();
document.querySelector("button").addEventListener("click", () => {
  creator();
});
window.addEventListener("mousewheel", e => cameraMove(e, true));
window.addEventListener("mousemove", e => cameraMove(e, false));
