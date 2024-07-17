AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    const cameraEl = this.el;
    const rotation = cameraEl.getAttribute('rotation');
    const hud = document.getElementById('hud');
    if (rotation.x > 90 || rotation.x < 90) {
      alert('unghiul mai mare de 90 de grade');
    }
    hud.innerHTML = `Pitch (x): ${rotation.x.toFixed(2)}<br>Yaw (y): ${rotation.y.toFixed(2)}`;
  }
});
