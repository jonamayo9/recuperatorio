/**
 * Enunciado:
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
 */
function mostrar()
{
// Declaracion de Variables	

	var nombre; 
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var continuar;

	var contadorProgramador = 0;
	var contadorAnalista = 0;
	var contadorQa = 0;
	var acumuladorProgramador = 0;
	var acumuladorAnalista = 0;
	var acumuladorQa = 0;

	var promedioProgramador;
	var promedioAnalista;
	var promedioQa;

	var sexoMayorSueldo;
	var mayorSueldo;
	var flagMayorSueldo=true;

	var femeninoMayorSueldo;
	var nombreFemeninoMayorSueldo;
	var flagFemeninoMayorSueldo=true;

	var contadorProgramadorNoBinario=0;
	

	do{ 
	nombre=prompt("Ingrese su nombre del empleado");
	while (isNaN(nombre)==false) {
		nombre=prompt("Huboun error, reingrese nombre del empleado");
	}

	edad = prompt("Ingrese la edad del empleado");
	while (isNaN(edad)) {
		edad = prompt("Error, reingrese la edad del empleado");
	}

	edad = parseInt(edad);

	sexo = prompt("ingrese el sexo del empleado: (masculino - femenino - no binario)");
	while (sexo != "masculino" && sexo != "femenino" && sexo !="no binario") {
		sexo = prompt("Hubo un error, reingrese el sexo: (masculino - femenino - no binario)");
	}

	puesto = prompt("Ingrese el Puesto: (programador - analista - Qa)");
	while (puesto != "programador" && puesto != "analista" && puesto != "Qa") {
		puesto = prompt("Hubo un error, reingrese el Puesto: (programador - analista - Qa)");
	}

	sueldo = prompt("Ingrese el sueldo del empleado");
	while (isNaN(sueldo) || sueldo =="" || sueldo < 15000 || sueldo > 70000) {
		sueldo = prompt("Hubo un error, reingrese el sueldo");
	}

		//  promedio de sueldos para cada puesto
	
	switch (puesto) {
		case "programador":
			contadorProgramador++;
			acumuladorProgramador = acumuladorProgramador + sueldo;

			//  cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
			if (sexo == "no binario" && sueldo >= 20000 && sueldo <= 55000) {
				contadorProgramadorNoBinario++;
			}

			break;

		case "analista":
			contadorAnalista++;
			acumuladorAnalista = acumuladorAnalista + sueldo;
			break;

		case "Qa":
			contadorQa++;
			acumuladorQa = acumuladorQa + sueldo;
			break;		
	}

	// el sexo del que percibe el mayor sueldo

	if (flagMayorSueldo==true || sueldo > mayorSueldo) {
		mayorSueldo = sueldo;
		sexoMayorSueldo = sexo;
		flagMayorSueldo = false;
	}

	// el nombre del empleado femenino con mas sueldo

	if (flagFemeninoMayorSueldo == true || sueldo > femeninoMayorSueldo) {
		if (sexo == "femenino") {
			femeninoMayorSueldo = sueldo;
			nombreFemeninoMayorSueldo = nombre;
			flagFemeninoMayorSueldo = false;
		}
	
	}






	continuar = confirm("Desea Ingresar otro empleado? ");

	}while(continuar); // TERMINA EL DO WHILE

	if (contadorProgramador > 0) {
		promedioProgramador = acumuladorProgramador / contadorProgramador;
	}else{
		promedioProgramador = 0;
	}

	if (contadorAnalista > 0) {
		promedioAnalista = acumuladorAnalista / contadorAnalista;
	}else{
		promedioAnalista = 0;
	}

	if (contadorQa > 0) {
		promedioQa = acumuladorQa / contadorQa;
	}else{
		promedioQa = 0;
	}

	// DATOS A MOSTRAR

	if (promedioProgramador > 0 ) {
		document.write("El Sueldo promedio de un programador es: " + promedioProgramador+"</ br>");
	}else{
		document.write("No existe empleado de programador </br>");
	}

	if (promedioAnalista > 0 ) {
		document.write("El Sueldo promedio de un Analista es: " + promedioAnalista+"</ br>");
	}else{
		document.write("No existe empleado Analista </br>");
	}

	if (promedioQa > 0 ) {
		document.write("El Sueldo promedio de un Qa es: " + promedioQa+"</ br>");
	}else{
		document.write("No existe empleado Qa </br>" );
	}
	document.write("El Sexo que percibe mayor sueldo es: " + sexoMayorSueldo);

	if (flagFemeninoMayorSueldo == true ) {
		document.write("No existe empleado Femenino </br>");
	}else{
		document.write("el nombre del empleado femenino con mas sueldo es: "+ nombreFemeninoMayorSueldo+ "</br>");
	}

	if (contadorProgramadorNoBinario > 0) {
		document.write("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 5500 "+ contadorProgramadorNoBinario);
	}else{
		document.write("no existe programador no binaro con sueldo de 20000 y 5500")
	}

}
