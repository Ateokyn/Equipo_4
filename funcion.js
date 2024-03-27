function enviarPerfil() {
    // Obtener valores del formulario
    const nombresUsuario = document.getElementById('nombresUsuario').value.trim();
    const apellidosUsuario = document.getElementById('apellidosUsuario').value.trim();
    const imagen = document.getElementById('imagen').value.trim(); // Aquí obtén la imagen, no estoy seguro de cómo obtienes su valor
    const correoElectronico = document.getElementById('correoElectronico').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const ocupacion = document.getElementById('ocupacion').value.trim();
    const intereses = document.getElementById('intereses').value.trim();
    const dispositivos = []; // Array para almacenar los dispositivos seleccionados
    const dispositivosCheckboxes = document.querySelectorAll('input[name="dispositivos"]:checked');
    dispositivosCheckboxes.forEach(checkbox => {
        dispositivos.push(checkbox.value);
    });
    const estado = document.querySelector('input[name="estado"]:checked').value;
    const cantidadHermanos = document.getElementById('cantidadHermanos').value.trim();
    const salud = document.getElementById('salud').value.trim();

    // Crear el documento PDF
    const doc = new jsPDF();
    doc.setFillColor(28, 41, 51);
    doc.rect(0, 0, 220, 60, 'F');
    doc.setFontSize(14);
    doc.setFontType("bold");
    doc.setTextColor(255, 255, 255);
    doc.text("Perfil de Usuario", 12, 50);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Agregar la información del perfil
    const contenido = `
        Nombre: ${nombresUsuario} ${apellidosUsuario}
        Correo Electrónico: ${correoElectronico}
        Teléfono: ${telefono}
        Fecha de Nacimiento: ${fechaNacimiento}
        Género: ${genero}
        Ciudad: ${ciudad}
        País: ${pais}
        Ocupación: ${ocupacion}
        Intereses: ${intereses}
        Dispositivos: ${dispositivos.join(', ')} // Unimos los dispositivos con una coma
        Estado: ${estado}
        Cantidad de Hermanos: ${cantidadHermanos}
        Salud: ${salud}
    `;
    doc.text(contenido, 10, 60);

    // Guardar el PDF con un nombre específico
    const pdfFilename = `${nombresUsuario}_${apellidosUsuario}_Perfil.pdf`;
    doc.save(pdfFilename);
}
