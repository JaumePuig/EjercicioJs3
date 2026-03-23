import { obtenerVuelos, obtenerVuelosPorDestino, actualizarPlazas } from "./vuelos_db.js";

/* 🔍 BUSCAR */
function ejecutarBusqueda() {
  let destino = document.getElementById("inputDestino").value;
  let vuelos = obtenerVuelosPorDestino(destino);
  let div = document.getElementById("resultadosBusqueda");

  div.innerHTML = "";

  for (let v of vuelos) {
    div.innerHTML += 
      v.destino + " - $" + v.precio +
      " <button onclick='reservar(" + v.id + ")'>Reservar</button><br>";
  }
}

/* 🎟️ RESERVAR */
function reservar(id) {
  let vuelos = obtenerVuelos();
  let v = vuelos.find(x => x.id == id);

  if (v.plazas > 0) {
    actualizarPlazas(id, v.plazas - 1);
    alert("OK");
  } else {
    alert("NO hay plazas");
  }
}

/* 📊 ESTADÍSTICAS */
function mostrarEstadisticas() {
  let vuelos = obtenerVuelos();

  let total = vuelos.reduce((a, v) => a + v.precio * (v.ocupados || 0), 0);

  let caro = vuelos[0];
  for (let v of vuelos) {
    if (v.precio > caro.precio) caro = v;
  }

  document.getElementById("reporteGral").innerHTML =
    "Total: $" + total + "<br>Más caro: " + caro.destino;
}

/* 🔗 CONECTAR BOTONES */
window.ejecutarBusqueda = ejecutarBusqueda;
window.mostrarEstadisticas = mostrarEstadisticas;
window.reservar = reservar;