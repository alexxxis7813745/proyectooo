// 1. Agregamos window. antes de la función para que el botón onclick la encuentre
window.eliminarCita = function(indice) {
    if (confirm("¿Estás seguro de que deseas eliminar esta cita?")) {
        let listaActual = JSON.parse(localStorage.getItem('datosClinica')) || [];
        listaActual.splice(indice, 1);
        localStorage.setItem('datosClinica', JSON.stringify(listaActual));
        actualizarVistaAgenda(); // Volvemos a dibujar la tabla
    }
}

// 2. También hacemos esta función global
window.actualizarVistaAgenda = () => {
    // Usamos el ID específico que me pasaste en el último mensaje
    const cuerpoTabla = document.getElementById('cuerpoTabla'); 
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = "";
    const citasAlmacenadas = JSON.parse(localStorage.getItem('datosClinica')) || [];

    if (citasAlmacenadas.length === 0) {
        cuerpoTabla.innerHTML = '<tr><td colspan="5" style="text-align:center;">No hay citas agendadas aún.</td></tr>';
        return;
    }

    citasAlmacenadas.forEach((cita, index) => {
        const nuevaFila = `
            <tr>
                <td>${cita.nombre}</td>
                <td>${cita.cedula}</td>
                <td>${cita.especialidad}</td>
                <td>${cita.fecha}</td>
                <td>
                    <button onclick="eliminarCita(${index})" class="btn-eliminar">Eliminar</button>
                </td>
            </tr>
        `;
        cuerpoTabla.innerHTML += nuevaFila;
    });
};

// 3. Todo lo que usa "addEventListener" debe esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formCita');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nuevaCita = {
                nombre: document.getElementById('nombre').value,
                cedula: document.getElementById('cedula').value,
                correo: document.getElementById('correo').value,
                especialidad: document.getElementById('especialidad').value,
                fecha: document.getElementById('fecha').value
            };

            const listaActual = JSON.parse(localStorage.getItem('datosClinica')) || [];
            listaActual.push(nuevaCita);
            localStorage.setItem('datosClinica', JSON.stringify(listaActual));

            formulario.reset();
            actualizarVistaAgenda();
            alert("¡Registro exitoso en Clínica La Esperanza!");
        });
    }

    // Llamada inicial para mostrar datos al abrir la página
    actualizarVistaAgenda();
});



const medicos = [
    {
        "id": 1,
        "nombre": "Dr. Abrahan Lincon",
        "especialidad": "Cardiología",
        "foto": "medicos/dr-1.png",
        "correo_electronico": "abraham@clinicaespera.com",
        "telefono": "+55 423 98327",
        "horario": {
        "dias": "Lunes a Viernes",
        "horas": "08:00 - 14:00"
        }
    },

    {
        "id": 2,
        "nombre": "Dra. Marta Diaz",
        "especialidad": "Pediatría",
        "foto": "medicos/dra-2.png",
        "correo_electronico": "martapediatra@icloud.com",
        "telefono": "(+1) 983 04353",
        "horario": {
        "dias": "Lunes, Miércoles y Jueves",
        "horas": "10:00 - 18:00"
        }
    },

    {
        "id": 3,
        "nombre": "Dr. Alejandro Villegas",
        "especialidad": "Rayos X",
        "foto": "medicos/dr-3.png",
        "correo_electronico": "alevillegas@clinica.net",
        "telefono": "0422 848769433",
        "horario": {
        "dias": "Martes y Jueves",
        "horas": "15:00 - 20:00"
        }
    },

    {
        "id": 4,
        "nombre": "Dra. Patricia Gonzales",
        "especialidad": "Bioanalicis",
        "foto": "medicos/dra-4.png",
        "correo_electronico": "bioanalistapati@laesperanza.net",
        "telefono": "+83 092348 4543",
        "horario": {
        "dias": "Lunes a Viernes",
        "horas": "09:00 - 13:00"
        }
    },
    {
        "id": 5,
        "nombre": "Dr. Sondra Claus",
        "especialidad": "Cirujana General",
        "foto": "medicos/dra-5.png",
        "correo_electronico": "quirofasondra@gmail.com",
        "telefono": "+52 94854 3578",
        "horario": {
        "dias": "Miércoles y Viernes",
        "horas": "12:00 - 19:00"
        }
    },

    {
        "id": 6,
        "nombre": "Dra Alexa Torres",
        "especialidad": "Medicina General",
        "foto": "medicos/dra-6.png",
        "correo_electronico": "dralexaclinica@icloud.com",
        "telefono": "+57 93865 2398",
        "horario": {
        "dias": "Lunes y Jueves",
        "horas": "10:00 - 16:00"
        }
    },

    {
        "id": 7,
        "nombre": "Dra Gal Gadog",
        "especialidad": "Cirujana Cardio Bascular",
        "foto": "medicos/dra7.png",
        "correo_electronico": "galdoctora@icloud.net",
        "telefono": "(+1) 8234 892494",
        "horario": {
        "dias": "Lunes a Miércoles",
        "horas": "8:00 - 14:00"
        }
    },

    {
        "id": 8,
        "nombre": "Dr Nestor Zerpa",
        "especialidad": "Rayos X",
        "foto": "medicos/dr-8.png",
        "correo_electronico": "zerpanestorrr@clinicaespe.net",
        "telefono": "+74 8376 9376",
        "horario": {
        "dias": "Lunes, Martes y Jueves",
        "horas": "10:00 - 20:00"
        }
    },

    {
        "id": 9,
        "nombre": "Dr Alexis Perez",
        "especialidad": "Bioanalicis",
        "foto": "medicos/dr-9.png",
        "correo_electronico": "drperex@icloud.com",
        "telefono": "0414 0443 555",
        "horario": {
        "dias": "Lunes a Sabado",
        "horas": "8:00 - 12:00"
        }
    },

    {
        "id": 10,
        "nombre": "Mary Montilla",
        "especialidad": "Medicina General",
        "foto": "medicos/dra-10.png",
        "correo_electronico": "marydra@icloud.com",
        "telefono": "+58 412 73285",
        "horario": {
        "dias": "Lunes, Miércoles y Sabado",
        "horas": "9:00 - 15:00"
        }
    },

    {
        "id": 11,
        "nombre": "Dr Jose Hernadez",
        "especialidad": "Pediatria",
        "foto": "medicos/dr-11.png",
        "correo_electronico": "hernandezdr@clinicaespe.net",
        "telefono": "+12 83754 2384",
        "horario": {
        "dias": "Lunes y Jueves",
        "horas": "10:00 - 22:00"
        }
    },

    {
        "id": 12,
        "nombre": "Dr Alejandro Guzman",
        "especialidad": "Cardiologia",
        "foto": "medicos/dr-12.png",
        "correo_electronico": "alejadro@icloud,com",
        "telefono": "+57 93785 934",
        "horario": {
        "dias": "Miércoles a Domingo",
        "horas": "12:00 - 19:00"
        }
    }
    ];

window.onload = function() {
    
    const medicosLista = document.getElementById('medicos-lista');
    const btnMostrar = document.getElementById('btnMostrarMedicos');

    if (!btnMostrar) {
        console.error("No se encontró el botón con ID 'btnMostrarMedicos'");
        return;
    }

    function mostrarListaMedicos() {
        console.log("Hiciste clic en el botón"); 
        let contenidoLista = '';

        medicos.forEach(medico => {
            contenidoLista += `
            <li style="margin-bottom: 20px; list-style: none;">
                <img src="${medico.foto}" alt="${medico.nombre}" style="width:50px; height:50px; border-radius:50%; object-fit: cover;">
                <br>
                <strong>${medico.nombre}</strong> - ${medico.especialidad}<br>
                <small>Correo: ${medico.correo_electronico} | Tel: ${medico.telefono}</small><br>
                <small>Horario: ${medico.horario.dias} ${medico.horario.horas}</small>
            </li><hr>`;
        });

        medicosLista.innerHTML = contenidoLista;
    }


    btnMostrar.onclick = mostrarListaMedicos;
};