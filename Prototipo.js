/*function Chat(mensaje){
	this.mensaje = mensaje;
	this.guardar =function () {
		console.log('Este es el metodo de la clase');
		// body...
	}
}

Chat.prototype.guardar = function() {
	console.log('Metodo Prototype');
	// body...
};

var chat =new Chat('Hola Mundo');
chat.__proto__.guardar();
chat.guardar();
console.log(chat);

/*
crear una clase Humano
debe tener como propiedad a que velocidad
corre (lento, normal, rapido);
crear un metodo prototipo
que muestre a que velocidad corre
generar 3 instancias, que reciban como parametros 
la velocidad a la que corren.
Luego mostrar a que velocidad corre cada instancia.
*/

function Humano(vel){
	this.vel = vel;
}
Humano.prototype.velocidad = function() {
	console.log(this.vel);
};

var humano1 = new Humano("Rapido");
humano1.velocidad();
var humano2 = new Humano("Lento");
humano2.velocidad();
var humano3 = new Humano("Normal");
humano3.velocidad();