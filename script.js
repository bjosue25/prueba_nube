function enviarMensaje() {
    var mensaje = document.getElementById("mensaje").value;
    var chatBox = document.getElementById("chatBox");
    var mensajeHtml = "<p><strong>Tú:</strong> " + mensaje + "</p>";
    chatBox.innerHTML += mensajeHtml;
    document.getElementById("mensaje").value = "";

    // Aquí puedes implementar la lógica del asistente virtual y agregar su respuesta al chatBox
    var respuestaHtml = "<p><strong>Asistente:</strong> Respuesta del asistente virtual</p>";
    chatBox.innerHTML += respuestaHtml;
}
