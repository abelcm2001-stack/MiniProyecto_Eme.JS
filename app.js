const DEBUGMODE = true;
const RECURSOS_INICIALES = 10;

const loteIncidentes = [
    { id: 101, descripcion: "Gato atrapado en un árbol", gravedad: 1, resuelta: false },
    { id: 102, descripcion: "Falsa alarma de humo en local", gravedad: 2, resuelta: true },
    { id: 103, descripcion: "Incendio estructural en bloque de viviendas", gravedad: 5, resuelta: false },
    { id: 104, descripcion: "Contenedor ardiendo en la vía pública", gravedad: 3, resuelta: false },
    { id: 105, descripcion: "Inundación leve de un sótano", gravedad: 2, resuelta: true },
    { id: 106, descripcion: "Accidente de tráfico múltiple en la A-4", gravedad: 5, resuelta: false },
    { id: 107, descripcion: "Rescate en ascensor bloqueado", gravedad: 2, resuelta: false }
];

function debugLog(mensaje) {
    if (DEBUGMODE) {
        console.log(mensaje);
    }
}

function calcularRecursos(gravedad) {
    if (gravedad >= 5) {
        return 2;
    }
    if (gravedad >= 3) {
        return 1;
    }
}

function procesarIncidente(incidente) {
    debugger;

    const recursosNecesarios = calcularRecursos(incidente.gravedad);
    debugLog(
        `Incidencia ${incidente.id}: ` +
        `${incidente.descripcion} | ` +
        `Gravedad: ${incidente.gravedad} | ` +
        `Recursos necesarios: ${recursosNecesarios}`
    );

    if (incidente.gravedad === 5) {
        debugLog(
            ` ALERTA MÁXIMA: Incidencia #${incidente.id} - ` +
            `${incidente.descripcion}`
        );
    } else if (incidente.gravedad >= 3) {
        debugLog(
            ` ALERTA ALTA: Incidencia #${incidente.id} - ` +
            `${incidente.descripcion}`
        );
    } else {
        debugLog(
            `ALERTA NORMAL: Incidencia #${incidente.id} - ` +
            `${incidente.descripcion}`
        );
    }

    return recursosNecesarios;
}


