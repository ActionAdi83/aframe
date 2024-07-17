AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    const cameraEl = this.el;
    const rotation = cameraEl.getAttribute('rotation');
    const hud = document.getElementById('hud');
    hud.innerHTML = `Pitch (x): ${rotation.x.toFixed(2)}<br>Yaw (y): ${rotation.y.toFixed(2)}`;
  }
});