let vuelos = [
  {
    id: 0,
    destino: "Tokyo",
    precio: 2000,
    asientosTotales: 500,
    asientosOcupados: 433,
    estado: "true",
  },
  {
    id: 1,
    destino: "Disparos Unidos",
    precio: 20000,
    asientosTotales: 500,
    asientosOcupados: 330,
    estado: "false",
  },
  {
    id: 2,
    destino: "Tokyo",
    precio: 1000,
    asientosTotales: 200,
    asientosOcupados: 133,
    estado: "true",
  },
  {
    id: 3,
    destino: "Seoul",
    precio: 1500,
    asientosTotales: 520,
    asientosOcupados: 433,
    estado: "true",
  },
  {
    id: 4,
    destino: "Berlin",
    precio: 3000,
    asientosTotales: 350,
    asientosOcupados: 330,
    estado: "true",
  },
  {
    id: 5,
    destino: "Bali",
    precio: 500,
    asientosTotales: 250,
    asientosOcupados: 233,
    estado: "true",
  },
];

function obtenerVuelosPorDestino(destino) {
    return vuelosFiltrados = vuelos.filter( (vuelo) => vuelo.destino==destino);
}

console.log(obtenerVuelosPorDestino("Tokyo"));

function verificarCapacidad(idVuelo) {
    let asientosLibres = vuelos.find((viaje) => viaje.id == idVuelo).asientosTotales - vuelos.find((viaje) => viaje.id == idVuelo).asientosOcupados;
    return asientosLibres;
}

console.log(verificarCapacidad(2));