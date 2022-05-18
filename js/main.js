// Selección de elementos del DOM

const numeroHabitaciones = document.getElementById('numeroHabitaciones')
const numeroBaños = document.getElementById('numeroBaños')
const tieneGarage = document.getElementById('garage')
const tienePatio = document.getElementById('patio')
const tamañoTerreno = document.getElementById('terreno')
const botonCalculo = document.getElementById('botonCalculo')
const resultadoCalculo = document.getElementById('resultadoCalculo')

//Función para calcular el precio estimado del valor de una casa

const calcularPrecio = () => {
  // Valores

  let habitaciones = Number(numeroHabitaciones.value)
  let baños = Number(numeroBaños.value)
  let garage = tieneGarage.value.toLowerCase()
  let patio = tienePatio.value.toLowerCase()
  let terreno = Number(tamañoTerreno.value)

  // Variables internas

  let precioHabitaciones = 0
  let precioBaños = 0
  let precioGarage = 0
  let precioPatio = 0
  let precioTerreno = 0

  // Calculos con ciclos y condicionales

  // Habitaciones
  for (let i = 0; i < habitaciones; i++) {
    precioHabitaciones += 10000
  }

  // Baños
  for (let i = 0; i < baños; i++) {
    precioBaños += 5000
  }

  // Garage
  if (garage === 's') {
    precioGarage = 10000
  }

  // Patio
  if (patio === 's') {
    precioPatio = 12000
  }

  // Terreno
  if (terreno > 0 && terreno < 40) {
    precioTerreno = 30000
  } else if (terreno < 80) {
    precioTerreno = 50000
  } else {
    precioTerreno = 70000
  }

  // Suma para  retornar el total

  return (
    precioHabitaciones +
    precioBaños +
    precioGarage +
    precioPatio +
    precioTerreno
  )
}

// Boton de calcular precio

botonCalculo.addEventListener(
  'click',
  () => (resultadoCalculo.innerText = 'U$D ' + calcularPrecio()),
)
