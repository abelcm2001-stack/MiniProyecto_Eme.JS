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

/**
 * Muestra un mensaje en la consola cuando el modo de depuración está activado.
 *
 * @param {string} mensaje - Texto que se mostrará en la consola.
 * @returns {void}
 */
function debugLog(mensaje) {
    if (DEBUGMODE) {
        console.log(mensaje);
    }
}

/**
 * Calcula los recursos necesarios para atender un incidente según su gravedad.
 *
 * @param {number} gravedad - Nivel de gravedad del incidente.
 * @returns {number} Número de recursos necesarios: 0, 1 o 2.
 */
function calcularRecursos(gravedad) {
    if (gravedad >= 5) {
        return 2;
    }
    if (gravedad >= 3) {
        return 1;
    }
    return 0;
}

/**
 * Registra las alertas de un incidente y determina los recursos que requiere.
 *
 * @param {Object} incidente - Incidente que se va a procesar.
 * @param {number} incidente.id - Identificador único del incidente.
 * @param {string} incidente.descripcion - Descripción del incidente.
 * @param {number} incidente.gravedad - Nivel de gravedad del incidente.
 * @param {boolean} incidente.resuelta - Indica si el incidente ya está resuelto.
 * @param {number} recursosNecesarios - Recursos calculados para atender el incidente.
 * @returns {number} Número de recursos necesarios para atender el incidente.
 */
function procesarIncidente(incidente, recursosNecesarios) {
    debugger;

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

/**
 * Ejecuta el sistema de atención de incidentes y consume los recursos disponibles.
 *
 * @param {Object[]} incidentes - Lista de incidentes que se procesarán.
 * @param {number} incidentes[].id - Identificador único del incidente.
 * @param {string} incidentes[].descripcion - Descripción del incidente.
 * @param {number} incidentes[].gravedad - Nivel de gravedad del incidente.
 * @param {boolean} incidentes[].resuelta - Indica si el incidente ya está resuelto.
 * @returns {number} Recursos disponibles al finalizar la ejecución.
 */
function ejecutarSistema(incidentes) {
    console.log(" ===== INICIO DEL SISTEMA EME-JS =====");

    let recursosDisponibles = RECURSOS_INICIALES;
    debugLog(`Recursos iniciales disponibles: ${recursosDisponibles}`);

    for (let i = 0; i < incidentes.length; i++) {
        const incidente = incidentes[i];

        if (recursosDisponibles <= 0) {
            console.warn(
                "No quedan recursos disponibles. " +
                "El sistema se detiene."
            );
            break;
        }

        debugger;

        if (incidente.resuelta) {
            debugLog(
                `Incidencia #${incidente.id} ya resuelta. ` +
                `Se ignora mediante continue.`
            );
            continue;
        }

        const recursosNecesarios = calcularRecursos(incidente.gravedad);
        if (recursosNecesarios > recursosDisponibles) {
            console.warn(
                `No hay recursos suficientes para atender la incidencia #${incidente.id}. ` +
                "El sistema se detiene."
            );
            break;
        }

        debugLog(
            `Procesando incidencia #${incidente.id} ` +
            `(posición ${i}).`
        );
        const recursosUsados = procesarIncidente(incidente, recursosNecesarios);
        recursosDisponibles -= recursosUsados;
        debugLog(`Recursos restantes: ${recursosDisponibles}`);
        console.log(
            `Estado del parque: ` +
            `${recursosDisponibles} recursos disponibles.`
        );
    }

    console.log(" ===== FIN DEL SISTEMA EME-JS =====");
    return recursosDisponibles;
}

ejecutarSistema(loteIncidentes);