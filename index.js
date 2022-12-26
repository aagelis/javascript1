
let nombre = prompt("Ingrese su nombre");
alert ("Hola " + nombre + " bienvenido a mi script de calcular promedio de edad ")

function calcularEdadPromedio() {
    edad = Number(
        prompt("Ingrese una edad, para dejar de ingresar edades ingrese 0")
    );

    while (edad > 0) {
        edadTotal = edadTotal + edad;
        contadora++;
        edad = Number(
            prompt("Ingrese una edad, para dejar de ingresar edades ingrese 0")
        );
    }

    promedio = edadTotal / contadora;
    alert("La edad promedio es " + promedio);
}

