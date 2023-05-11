
$(document).ready(function(){
	$("#formulario_registro").submit(function(event){
		event.preventDefault(); // Evita que se envíe el formulario

		// Validación de campos requeridos
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var confirm_password = $("#confirm_password").val();
		var edad = $("#edad").val();
		var genero = $("#genero").val();
		var pais = $("#pais").val();
		var #Empresa = $("#Empresa").val();

		if(nombre === '' || apellido === '' || email === '' || password === '' || confirm_password === '' || edad === '' || genero === '' || pais === ''){
			alert("Por favor complete todos los campos.");
			return false;
		}

		// Validación de dirección de email
		var regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!regex_email.test(email)){
			alert("Por favor ingrese una dirección de correo electrónico válida.");
			return false;
		}

		// Validación de contraseña
		if(password !== confirm_password){
			alert("Las contraseñas no coinciden.");
			return false;
		}

		// Validación de edad
		if(edad < 18){
			alert("Debes tener al menos 18 años para registrarte.");
			return false;
		}

		// Envío del formulario si todas las validaciones pasan
		alert("¡Gracias por registrarte!");
		$("#formulario_registro")[0].submit();
	});
});