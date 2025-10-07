document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("enviarBtn").addEventListener("click", responder);
  document.getElementById("borrarBtn").addEventListener("click", borrarChat);
  document.getElementById("activarBtn").addEventListener("click", ejecutarAutomatizacion);
  document.getElementById("reiniciarBtn").addEventListener("click", reiniciarDesafio);
});

function responder() {
  const inputField = document.getElementById("userInput");
  const input = inputField.value.trim().toLowerCase();
  const chatlog = document.getElementById("chatlog");

  if (!input) return;

  let respuesta = "No entendí tu mensaje. ¿Podés reformularlo?";

  if (input.includes("hola")) {
    respuesta = "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?";
  } else if (input.includes("gracias")) {
    respuesta = "¡De nada! 😊 Estoy aquí para ayudarte.";
  } else if (input.includes("automatización")) {
    respuesta = "La automatización con IA permite que las máquinas realicen tareas repetitivas de forma inteligente.";
  } else if (input.includes("inteligencia artificial") || input.includes("ia")) {
    respuesta = "La IA es la capacidad de una máquina para imitar la inteligencia humana: aprender, razonar y adaptarse.";
  } else if (input.includes("video")) {
    respuesta = "Te recomiendo este video sobre IA: https://www.youtube.com/watch?v=2ePf9rue1Ao";
  }

  chatlog.innerHTML += `<p><strong>Tú:</strong> ${input}</p>`;
  chatlog.innerHTML += `<p><strong>Asistente:</strong> ${respuesta}</p>`;
  inputField.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
}

function borrarChat() {
  const chatlog = document.getElementById("chatlog");
  chatlog.innerHTML = "";
}

function ejecutarAutomatizacion() {
  const condicion = document.getElementById('condicion').value;
  const accion = document.getElementById('accion').value;
  const resultado = document.getElementById('resultado');
  const boton = document.getElementById('activarBtn');

  resultado.style.display = 'block';
  resultado.className = 'animacion';
  resultado.innerHTML = '';

  // Simulación de condición
  if (condicion === 'saludo') {
    resultado.innerHTML += '<p><strong>Simulación:</strong> Usuario escribió "hola"</p>';
  } else if (condicion === 'clic') {
    resultado.innerHTML += '<p><strong>Simulación:</strong> Usuario hizo clic en el botón</p>';
  }

  // Acción seleccionada
  if (accion === 'color') {
    document.body.classList.add('sin-capa');
    document.body.style.backgroundColor = '#cce3ff'; // celeste claro
    resultado.innerHTML += '<p> ¡Color de fondo cambiado automáticamente!</p>';
  } else if (accion === 'mensaje') {
    resultado.innerHTML += '<p> La automatización puede ayudarte a aprender más rápido. ¡Bien hecho!</p>';
  } else if (accion === 'imagen') {
    resultado.innerHTML += `
      <img src="ilustracion.png" 
           alt="IA" width="300" 
           style="margin-top:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);" />
    `;
  }

  boton.classList.add('animado');
  setTimeout(() => boton.classList.remove('animado'), 500);
}

function reiniciarDesafio() {
  const resultado = document.getElementById("resultado");
  const condicion = document.getElementById("condicion");
  const accion = document.getElementById("accion");

  resultado.innerHTML = "";
  resultado.style.display = "none";
  document.body.classList.remove('sin-capa');
  document.body.style.backgroundColor = "#f4f8fc";
  condicion.selectedIndex = 0;
  accion.selectedIndex = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menuLista");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});