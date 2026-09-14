# cma_source

Sitio institucional de soluciones digitales, unidad tecnológica de CMA Consulting.

## Contenido

- Presentación de marca, servicios, galería de seis proyectos y vínculo con CMA Consulting.
- Galería filtrable; servicios desplegables; menú adaptable a celulares.
- Formulario que abre WhatsApp con el texto preparado por el visitante. No envía mensajes automáticamente ni guarda datos en un servidor.
- Logos originales aportados por Matías. Capturas de proyectos tomadas del sitio público de CMA Consulting; captura de Consulting obtenida de su web. Ilustración de portada generada para este proyecto.
- HTML, CSS y JavaScript; sin dependencias de aplicación, base de datos ni claves API.

## Ejecutar

Abrir `index.html` en un navegador o servir la carpeta con un servidor estático.

## Build

Con Node.js 20 o posterior:

```sh
node scripts/build.mjs
```

También está disponible `npm run build`. El resultado queda en `dist/`.

## Vercel

El proyecto incluye `vercel.json`: preset Other, build `npm run build`, output `dist`.
Importar el repositorio donde se decida guardar este proyecto o publicar la carpeta mediante Vercel CLI. Esta entrega todavía no se ha desplegado ni vinculado a un dominio.

Cuando se confirme la URL definitiva, añadir URL canónica y metadatos sociales con ese dominio. No se asumió un dominio no registrado.

## Contacto

Se reutilizaron los datos publicados en CMA Consulting:
- WhatsApp: +54 9 11 3759-3744
- Email: carlosmatiasalvarez.cma@gmail.com
- LinkedIn: https://www.linkedin.com/in/cmatiasalvarez/

## Proyectos

1. CMA Markets — dashboard financiero; producto propio en desarrollo.
2. Víctor Abadie Inmobiliaria — web y gestión comercial.
3. CMA Diagnóstico 360 — herramienta propia de diagnóstico empresarial.
4. CMA Portfolio — herramienta educativa de capital y perfil inversor.
5. CMA Consulting — web institucional propia.
6. Hydria — ecommerce, incluido en la galería pública de Consulting.

Las imágenes de la galería son capturas, no vistas en tiempo real. Para actualizarlas, reemplazar los archivos correspondientes en `assets/`.

## Validación realizada

Build estático completado; JavaScript validado sintácticamente; comprobados seis proyectos, IDs únicos, enlaces internos y existencia de todos los archivos referenciados. La apertura de la vista local fue bloqueada por la política de seguridad del navegador de la sesión, por lo que quedan pendientes la inspección visual en navegador y la prueba interactiva completa antes de publicar.

## Dirección visual

Azul #101c3e, turquesa #008f91, blanco y menta #eaf4f2. Tipografía Manrope. Diseño responsive, foco visible, etiquetas de formulario, navegación por anclas y compatibilidad con movimiento reducido.

Referencias consultadas: https://tuxdi.com/ y https://www.nan-labs.com/, a partir de la selección editorial compartida. Se usaron como referencia de comunicación y jerarquía; no se copiaron sus recursos gráficos.


## Revisión UX/UI de la segunda versión

- Flechas SVG con medidas y trazos uniformes; dirección horizontal en acciones internas y diagonal en salidas externas. Sin dependencia de glifos de la fuente.
- Acceso flotante a WhatsApp +5491137593744, sin envío automático, con área circular de 56 px, etiqueta accesible, posición adaptada a área segura y espacio inferior reservado en el footer.
- Logo de Consulting en la sección institucional enlazado a su web. Logo pequeño adicional en el footer, también enlazado. La captura de Consulting en la galería conserva el enlace existente.
- Desvanecimiento CSS en los bordes del recurso de portada para integrar el fondo; recurso original conservado.
- Contraste del botón turquesa: 5,15:1; botón flotante: 5,23:1. Se oscurecieron metadatos y placeholders y se ampliaron varios textos pequeños.
- Filtros con altura mínima de 44 px y galería sin cambio arbitrario de tamaño al filtrar.
- Menú móvil hasta 900 px; controles adaptados a pantallas pequeñas; estado del menú restablecido al volver a escritorio o pulsar fuera.
- Email opcional, instrucciones visibles para longitud del mensaje y conservación de validación de campos.

Validación: sintaxis JavaScript, build, recursos, anclas, identificación de campos, vínculos de logos y contraste calculado. Prueba aislada de lógica con entorno simulado para menú, filtros, servicio, codificación de WhatsApp y mensaje vacío. No equivale a validación renderizada: la política del navegador bloqueó previamente la URL local. Captura del usuario utilizada como evidencia de la versión anterior; inspección visual posterior, solapamientos reales, consola del navegador y dispositivos físicos pendientes.
