// motor_logica.js

// Función para buscar vuelos y mostrarlos
function ejecutarBusqueda() {
  let destino = document.getElementById("inputDestino").value;
  let resultados = obtenerVuelosPorDestino(destino);
  let div = document.getElementById("resultadosBusqueda");

  div.innerHTML = "";

  if(resultados.length === 0) {
    div.innerHTML = "No hay vuelos";
    return;
  }

  for(let v of resultados) {
    let plazasLibres = v.asientosTotales - v.asientosOcupados;
    div.innerHTML += `
      ${v.destino} | $${v.precio} | Plazas libres: ${plazasLibres} 
      <button onclick="reservar(${v.id})">Reservar</button><br>
    `;
  }
}

// Función para reservar un vuelo
function reservar(id) {
  let vuelo = vuelos.find(v => v.id == id);
  if(vuelo.asientosOcupados < vuelo.asientosTotales) {
    vuelo.asientosOcupados += 1;
    alert("Reserva realizada");
    ejecutarBusqueda(); // refrescar lista
  } else {
    alert("No hay plazas disponibles");
  }
}

// Función para mostrar estadísticas
function mostrarEstadisticas() {
  let total = 0;
  let caro = vuelos[0];

  for(let v of vuelos) {
    total += v.precio * v.asientosOcupados;
    if(v.precio > caro.precio) caro = v;
  }

  document.getElementById("reporteGral").innerHTML =
    `Total recaudación: $${total} <br>Destino más caro: ${caro.destino} ($${caro.precio})`;
}

// Hacer funciones visibles para los botones
window.ejecutarBusqueda = ejecutarBusqueda;
window.mostrarEstadisticas = mostrarEstadisticas;
window.reservar = reservar;