function suma(uno,dos,tres,cuatro,cinco,seis) {
    const suma = uno+dos+tres+cuatro+cinco+seis;
    return suma
}

function promedio() {
    const promedio = sumaResultado/6
    return promedio
}

const sumaResultado= suma(6,8,9,2,5,10)
console.log ("La suma de notas es:", sumaResultado)


const promedioResultado= promedio()
console.log ("El promedio de notas es:", promedioResultado)
