# Aplicación de Mensajes Encriptados

## Descripción

La **Aplicación de Mensajes Encriptados** permite a los usuarios encriptar y desencriptar mensajes utilizando una clave. La clave utilizada debe coincidir con una clave predefinida para que las operaciones de encriptación y desencriptación sean exitosas.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

1. **HTML (index.html)**: Contiene la estructura de la aplicación y la interfaz de usuario.
2. **JavaScript (app.js)**: Contiene la lógica para encriptar y desencriptar los mensajes.

## Instalación

Para ejecutar la aplicación, simplemente descarga el proyecto y abre el archivo `index.html` en un navegador web. Asegúrate de tener acceso a Internet para cargar el CDN de Bulma.

## Uso

1. **Encriptar un Mensaje**:

   - Escribe el mensaje que deseas encriptar en el campo de texto.
   - Introduce la clave (por defecto: `prueba-utn`) en el campo correspondiente.
   - Haz clic en el botón **Encriptar**. Si la clave es correcta, se mostrará el mensaje encriptado.

2. **Desencriptar un Mensaje**:
   - Escribe el mensaje encriptado en el campo de texto.
   - Introduce la misma clave utilizada para encriptar el mensaje.
   - Haz clic en el botón **Desencriptar**. Si la clave es correcta, se mostrará el mensaje desencriptado.

## Claves y Encriptación

### Clave Predefinida

La clave predefinida utilizada para encriptar y desencriptar los mensajes es `prueba-utn`. Su hash es `Y2xhdmUtdXRu`, que se genera utilizando Base64.

### Funciones Principales

- `hashKey(key)`: Toma una clave como entrada y devuelve su representación en Base64.
- Encriptación: Utiliza `btoa(message)` para encriptar el mensaje en formato Base64.
- Desencriptación: Utiliza `atob(message)` para convertir el mensaje en Base64 de vuelta a su formato original.

## Estilos

La aplicación utiliza Bulma, un framework CSS moderno y ligero, para estilizar la interfaz de usuario. Asegúrate de que la conexión a Internet esté disponible para cargar el CDN de Bulma.

## Ejemplo de Uso

1. **Encriptar**:

   - Mensaje: "Hola Mundo"
   - Clave: "prueba-utn"
   - Resultado: "SG9sYSBNdW5kbw=="

2. **Desencriptar**:
   - Mensaje Encriptado: "SG9sYSBNdW5kbw=="
   - Clave: "prueba-utn"
   - Resultado: "Hola Mundo"

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar esta aplicación, siéntete libre de hacer un fork del repositorio y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
