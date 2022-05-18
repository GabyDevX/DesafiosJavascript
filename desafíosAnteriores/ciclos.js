const reglas =
  "En este inicio de sesión para probar deberás ingresar uno de los cuatro nombres validos: Gabriel, Camila, Loki o Luna. Al ingresar un nombre válido tendrás 4 intentos para ingresar la contraseña correcta, la cual será el nombre de usuario (en minúsculas). para salir de esta instancia mientras ingresas los nombres deberás ingresar la palabra 'esc' y si quieres volver a ver las reglas deberás ingresar la palabra 'reglas'."

alert(reglas)

alert('A continuación deberas ingresar un nombre de usuario')

let nombre = prompt('Ingrese su nombre de usuario').toLowerCase()

while (nombre !== null) {
  if (nombre === 'reglas') {
    alert(reglas)
    nombre = 'x'
    continue
  } else if (nombre === 'esc') {
    break
  } else if (nombre === 'gabriel') {
    alert('Bien ' + nombre + ', ingresa tu contraseña ahora:')
    for (let i = 0; i < 4; i++) {
      let contraseña = prompt('Ingresa tu contraseña: ')
      let intento = i + 1
      if (contraseña == 'gabriel') {
        alert('Contraseña correcta!')
        break
      } else {
        alert('Contraseña incorrecta, intento ' + intento + ' de 4')
      }

      if (i == 3) {
        alert('Cuenta bloqueada')
      }
    }
    break
  } else if (nombre === 'camila') {
    alert('Bien ' + nombre + ', ingresa tu contraseña ahora:')
    for (let i = 0; i < 4; i++) {
      let contraseña = prompt('Ingresa tu contraseña: ')
      let intento = i + 1
      if (contraseña == 'camila') {
        alert('Contraseña correcta!')
        break
      } else {
        alert('Contraseña incorrecta, intento ' + intento + ' de 4')
      }

      if (i == 3) {
        alert('Cuenta bloqueada')
      }
    }
    break
  } else if (nombre === 'loki') {
    alert('Bien ' + nombre + ', ingresa tu contraseña ahora:')
    for (let i = 0; i < 4; i++) {
      let contraseña = prompt('Ingresa tu contraseña: ')
      let intento = i + 1
      if (contraseña == 'loki') {
        alert('Contraseña correcta!')
        break
      } else {
        alert('Contraseña incorrecta, intento ' + intento + ' de 4')
      }

      if (i == 3) {
        alert('Cuenta bloqueada')
      }
    }
    break
  } else if (nombre === 'luna') {
    alert('Bien ' + nombre + ', ingresa tu contraseña ahora:')
    for (let i = 0; i < 4; i++) {
      let contraseña = prompt('Ingresa tu contraseña: ')
      let intento = i + 1
      if (contraseña == 'luna') {
        alert('Contraseña correcta!')
        break
      } else {
        alert('Contraseña incorrecta, intento ' + intento + ' de 4')
      }

      if (i == 3) {
        alert('Cuenta bloqueada.')
      }
    }
    break
  } else {
    alert('Nombre de usuario no encontrado, por favor ingrese uno válido.')
    nombre = prompt('Ingrese su nombre de usuario').toLowerCase()
    continue
  }
}
