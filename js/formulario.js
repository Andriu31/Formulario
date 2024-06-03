var datos = [];

function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fotoInput = document.getElementById("foto");
    var foto = fotoInput.files[0]; // Obtener el archivo de la imagen

    var reader = new FileReader();
    reader.onload = function(event) {
        var fotoBase64 = event.target.result; // Obtener la imagen como base64
        datos.push({
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            fechaNacimiento: fechaNacimiento,
            foto: fotoBase64 // Guardar la imagen como base64
        });

        mostrarDatos();
        limpiarFormulario();
    };
    reader.readAsDataURL(foto); // Convertir la imagen a base64
}

function mostrarDatos() {
    var tableBody = document.getElementById("dataBody");
    tableBody.innerHTML = "";

    datos.forEach(function(item) {
        var newRow = tableBody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.textContent = item.nombre;
        cell2.textContent = item.apellido;
        cell3.textContent = item.edad;
        cell4.textContent = item.fechaNacimiento;
        cell5.innerHTML = "<img src='" + item.foto + "' alt='Foto' width='100'>";
    });
    

}
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("foto").value = "";}