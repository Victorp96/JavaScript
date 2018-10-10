var nombre="123";

function leer_Datos(){
	nombre=	prompt("Nombre:");
	if (nombre=="" ||nombre==null)
		alert("Debe escribir el nombre");
	else
		alert("El nombre es "+nombre)
}
			
function saludar(){
	alert("El nombre es "+nombre)
}