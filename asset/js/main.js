function guardarDatos(){
	var nombre = document.getElementById("nombre").value;
	var password = document.getElementById("password").value;
	sessionStorage.setItem(nombre,password);
}
function recuperarDatos(){
	for (var i = 0; i < sessionStorage.length; i++) {
		var nombre = sessionStorage.key(i);
		var password = sessionStorage.getItem(nombre);
		document.getElementById("data").innerHTML = "<div>" + "Nombre: " + nombre + "</br>Clave: " + password + "</div>";
	}
}
function limpiarDatos(){
	document.getElementById("data").innerHTML = "limpia vista. los Datos permanecen.";
}
function borrarTodo(){
	sessionStorage.clear();
	recuperarDatos();
}