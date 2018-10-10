var nombre="123";

function leer_Datos(){
	nombre=prompt("Nombre:"); //usando la variable global
	//var nombre= prompt("Nombre:"); //var nombre sera una variable local
	if (nombre=="" || nombre==null) 
		alert("Debe escribir el nombre");
	else
		alert("El nombre es: "+nombre)
}

function saludar() {
	alert("El nombre es "+nombre)
}