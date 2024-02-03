let isLightOn = false;

function toggleLight() {
  isLightOn = !isLightOn;
  const lamp = document.getElementById('lamp');
  const lightBulb = document.createElement('div');
  lightBulb.classList.add('light-bulb');

  if (isLightOn) {
    lightBulb.style.backgroundColor = '#ffd700'; // Color amarillo para representar la luz encendida
  }

  lamp.innerHTML = '';
  lamp.appendChild(lightBulb);

  setTimeout(() => {
    if (!isLightOn) {
      lightBulb.style.backgroundColor = '#fff'; // Color blanco para representar la luz apagada
    }
  }, 500);
}
