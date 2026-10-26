# Eme-JS — Simulador de Emergencias

## Autores

Proyecto realizado por:

- **Abel Carbonero Mora**
- **Manuel Jesús Arenas Ramírez**

Este proyecto se ha desarrollado mediante la metodología **Pair Programming**, intercambiando los roles de Driver y Navigator durante las diferentes fases.

---

## Descripción

**Eme-JS** es una pequeña aplicación web que simula la gestión de alertas de un parque de bomberos y ambulancias.

El sistema recibe un lote de incidencias con diferentes niveles de gravedad y las procesa mediante un motor lógico desarrollado en JavaScript. Dependiendo de la gravedad, del estado de la incidencia y de los recursos disponibles, el sistema decide cómo actuar.

---

## Tecnologías utilizadas

- HTML5
- JavaScript
- Git
- GitHub
- GitHub Actions
- GitHub Pages

---

## Estructura del proyecto

```text
Eme-JS/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── app.js
└── README.md
```

---

## Funcionamiento

El programa contiene un array denominado **loteIncidentes**. Cada incidencia dispone de:

- **id**: identificador de la incidencia.
- **descripcion**: descripción del problema.
- **gravedad**: nivel de gravedad entre 1 y 5.
- **resuelta**: indica si la incidencia ya ha sido resuelta.

El sistema recorre las incidencias mediante un bucle **for** y toma decisiones mediante estructuras condicionales.

### Gestión de incidencias

- Las incidencias que ya están resueltas se ignoran utilizando **continue**.
- Las incidencias con gravedad **5** generan una **alerta máxima**.
- Las incidencias con gravedad **3** o **4** generan una **alerta alta**; las de gravedad inferior generan una **alerta normal**.
- Las incidencias de gravedad **5** consumen 2 recursos, las de gravedad **3** o **4** consumen 1 y las de gravedad inferior no consumen recursos.
- Cuando no quedan recursos suficientes para atender la siguiente incidencia, el sistema utiliza **break** para detener el procesamiento sin dejar el contador de recursos en negativo.

---

## Requisitos técnicos implementados

### Estructuras de control

Se utilizan:

- **for** para recorrer el lote de incidencias.
- **if/else** para tomar decisiones según la gravedad.
- **continue** para ignorar incidencias ya resueltas.
- **break** para detener el sistema cuando no quedan recursos.

### Gravedad máxima

Cuando una incidencia tiene una gravedad igual a **5**, se muestra una alerta máxima en la consola:

```text
ALERTA MÁXIMA
```

### Gestión de recursos

El sistema comienza con 10 recursos. Después de procesar cada incidencia, descuenta los recursos que correspondan a su gravedad. Si los recursos llegan a **0**, el procesamiento se detiene.

---

## Modo de depuración

El proyecto utiliza la constante:

```js
const DEBUGMODE = true;
```

Cuando **DEBUGMODE** está activado, el programa muestra información adicional en la consola para facilitar el seguimiento de la ejecución.

Los mensajes de estado utilizan **Template Literals**, por ejemplo:

```js
**Recursos restantes: ${recursosDisponibles}**
```

También se han incluido instrucciones **debugger** en puntos críticos del procesamiento para analizar el programa mediante las herramientas de desarrollo del navegador.

---

## Documentación JSDoc

Las funciones principales incluyen comentarios JSDoc en el propio archivo **app.js**. Las etiquetas **@param** describen los parámetros y sus tipos, mientras que **@returns** indica el tipo y el significado del valor devuelto.

---

## Pair Programming

### Driver

El Driver escribe directamente el código. Se ocupa de:

- Escribir la sintaxis.
- Crear las variables.
- Implementar las estructuras de control.
- Realizar los cambios en el ordenador.

### Navigator

El Navigator supervisa el trabajo del Driver. Sus funciones son:

- Revisar la lógica.
- Detectar posibles errores.
- Comprobar el flujo del programa.
- Buscar bugs.
- Indicar qué partes deben depurarse.
- Guiar al Driver durante el uso de DevTools.

### Intercambio de roles

Los roles se intercambian durante el desarrollo para que ambos integrantes participen como Driver y Navigator. Los cambios quedan reflejados en el historial de commits del repositorio.

---

## Git y control de versiones

El proyecto se gestiona mediante Git y GitHub. Los commits identifican las diferentes fases del proyecto y el rol desempeñado por cada integrante.

Ejemplo de formato:

```text
feat: implementado bucle de incidentes
(Driver: Abel Carbonero Mora, Navigator: Manuel Jesús Arenas Ramírez)
```

---

## CI/CD y despliegue

El proyecto utiliza **GitHub Actions** para automatizar el despliegue. El workflow se encuentra en **.github/workflows/deploy.yml** y se ejecuta al hacer **push** a la rama **main** (también puede iniciarse manualmente).

El proyecto se publica mediante GitHub Pages, por lo que los cambios de la rama principal pueden desplegarse automáticamente en la web.