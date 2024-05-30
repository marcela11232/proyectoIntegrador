




function agregarActividad() {
    var nombre = document.getElementById('nombreActividad').value;
    var descripcion = document.getElementById('descripcionActividad').value;
    var imagenUrl = document.getElementById('imagenActividad').value;

    if (nombre && descripcion && imagenUrl) {
        var contenedorActividades = document.getElementById('contenedorActividades');

        var actividadDiv = document.createElement('div');
        actividadDiv.className = 'actividad';

        var imagen = document.createElement('img');
        imagen.src = imagenUrl;
        imagen.alt = nombre;

        var nombreDiv = document.createElement('div');
        nombreDiv.textContent = nombre;

        var descripcionDiv = document.createElement('div');
        descripcionDiv.textContent = descripcion;

        actividadDiv.appendChild(imagen);
        actividadDiv.appendChild(nombreDiv);
        actividadDiv.appendChild(descripcionDiv);

        contenedorActividades.appendChild(actividadDiv);

        // Limpiar los inputs
        document.getElementById('nombreActividad').value = '';
        document.getElementById('descripcionActividad').value = '';
        document.getElementById('imagenActividad').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
    

         




     

  