
<!-- APARECER MENSAJE -->

function AparecerMensaje(activo,id) {
   console.log("entro a funcion AparecerMensaje");
   if (activo == true){
      var r;
      var txt;
      var r = confirm("¿Seguro que aparezca el mensaje?");
      if (r == true) {
        txt = "Enviado";
      } else {
        txt = "No enviado!";
      }
      document.getElementById("AparecerMensaje").innerHTML = txt;
  }
}
