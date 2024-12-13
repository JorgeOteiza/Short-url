# ShortURL - React + Vite URL Shortener

## Descripción

**ShortURL** es una aplicación moderna y minimalista diseñada para acortar URLs utilizando la API de TinyURL. Construida con **React** y **Vite**, esta aplicación ofrece una experiencia fluida y rápida para usuarios que buscan transformar URLs largas en enlaces cortos y manejables.

La combinación de React y Vite proporciona una configuración ligera con soporte para **Hot Module Replacement (HMR)** y un entorno de desarrollo optimizado.

---

## Características

- **Acortar URLs**: Convierte URLs largas en enlaces cortos y fáciles de compartir.
- **Validación de URLs**: Verifica que las URLs ingresadas sean válidas antes de procesarlas.
- **Interfaz Reactiva**: Construida con React, con actualizaciones en tiempo real de los enlaces generados.
- **Configuración Moderna**: Integración de Vite para desarrollo rápido y eficiente.
- **Uso de TinyURL API**: Se conecta a la API oficial de TinyURL para procesar las solicitudes.

---

## Requisitos Previos

Antes de ejecutar esta aplicación, asegúrate de tener instalados:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

Además, necesitarás una clave de API de TinyURL. Puedes obtenerla registrándote en [TinyURL Developer Portal](https://tinyurl.com/app/settings/api).

---

## Instalación

### 1. **Clonar el Repositorio**:

```bash
git clone https://github.com/tu-usuario/short-url.git
cd short-url
2. Instalar Dependencias:
bash
Copiar código
npm install
3. Configurar Variables de Entorno:
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

plaintext
Copiar código
VITE_API_URL=https://api.tinyurl.com/create
VITE_TINYURL_API_KEY=TU_API_KEY
4. Ejecutar el Servidor de Desarrollo:
bash
Copiar código
npm run dev
5. Abrir en el Navegador:
Visita http://localhost:5173.

Uso de la Aplicación
Ingresa una URL válida en el campo de texto.
Haz clic en el botón "Acortar URL".
Si la URL es válida, se generará un enlace corto que se mostrará en la interfaz.
Haz clic en el enlace generado para acceder al destino.
Tecnologías Utilizadas
Frontend
React: Biblioteca para construir interfaces de usuario.
Vite: Herramienta moderna de desarrollo para aplicaciones rápidas.
CSS: Diseño sencillo y adaptable.
Backend (opcional)
FastAPI: Endpoint adicional para gestionar las solicitudes de acortamiento.
SQLite: Base de datos simple para pruebas locales.
PostgreSQL: Soporte para entornos de producción.
Comandos Disponibles
npm run dev: Ejecuta el servidor de desarrollo con Vite.
npm run build: Genera una versión optimizada para producción.
npm run preview: Previsualiza la aplicación generada para producción.
Contribución
Si deseas contribuir al proyecto:

Haz un fork del repositorio.
Crea una rama para tus cambios:
bash
Copiar código
git checkout -b feature/nueva-funcionalidad
Realiza un commit con tus cambios:
bash
Copiar código
git commit -m "Agrega nueva funcionalidad"
Sube tus cambios a tu repositorio:
bash
Copiar código
git push origin feature/nueva-funcionalidad
Abre un Pull Request.
Créditos
Este proyecto fue desarrollado para explorar y demostrar el uso de React, Vite y la API de TinyURL en un entorno moderno de desarrollo.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Disfruta usando ShortURL! 🚀
```
