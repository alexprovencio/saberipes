# SaberIP.es - Tu Dirección IP Pública

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/alexprovencio/saberipes)
[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

Una página web simple, responsive y de diseño ligero que muestra la dirección IP del usuario.

**📧 Contacto:** [conexionsin@gmail.com](mailto:conexionsin@gmail.com)

**🌐 Sitio web:** [https://saberip.es](https://saberip.es)

**💻 Código fuente:** [https://github.com/alexprovencio/saberipes](https://github.com/alexprovencio/saberipes)

## Características

- **Diseño moderno y responsive**: Funciona perfectamente en móviles, tablets y escritorio
- **Interfaz en español**: Totalmente traducido al español
- **Copiado fácil**: Haz clic en la IP o en el botón para copiar al portapapeles
- **Confirmación visual**: Notificación emergente cuando se copia la IP
- **Diseño ligero**: Carga rápida sin dependencias externas
- **Visualmente atractivo**: Gradientes suaves y animaciones sutiles
- **Favicon personalizado**: Icono de navegador con branding de SaberIP.es
- **Seguridad mejorada**: 
  - Advertencia visual si no se usa HTTPS
  - Headers de seguridad en meta tags
  - Content Security Policy para protección
- **HTTPS requerido**: Advertencia clara cuando la página no se sirve mediante HTTPS

## Estructura del proyecto

- `index.html`: Página principal con HTML, CSS y JavaScript integrados
- `server.py`: Servidor Python simple para pruebas locales

## Cómo usar

### Para desarrollo local:

1. Clona este repositorio o descarga los archivos
2. Navega al directorio del proyecto
3. Ejecuta el servidor Python:
   ```bash
   python3 server.py
   ```
4. Abre tu navegador en: http://localhost:8000

### Para probar la funcionalidad de copiado:

1. Haz clic en el botón "Copiar IP" o directamente en la dirección IP mostrada
2. Deberías ver:
   - El botón cambiar a "✓ ¡Copiado!" temporalmente
   - Una notificación emergente en la parte inferior que dice "IP copiada al portapapeles"
   - La dirección IP copiada en tu portapapeles
3. Puedes pegar la IP en cualquier campo de texto para verificar
4. También hay un botón de prueba que copia "127.0.0.1" para testing rápido

**Nota:** Algunos navegadores pueden requerir que la página se sirva mediante HTTPS para que el API de portapapeles funcione correctamente.

### Para producción:

1. Sube el archivo `index.html` a tu servidor web
2. Configura tu dominio (saberip.es) para apuntar a este archivo
3. Asegúrate de tener HTTPS configurado para seguridad

## Tecnologías utilizadas

- HTML5
- CSS3 con gradientes y animaciones
- JavaScript vanilla (sin frameworks)
- API pública de ipify.org para obtener la IP
- Diseño responsive con media queries

## Personalización

Puedes personalizar fácilmente:
- **Colores**: Modifica los valores en los gradientes CSS
- **Texto**: Edita el contenido en español en el HTML
- **Fuentes**: Cambia la familia de fuentes en el CSS

## Seguridad

La página incluye varias medidas de seguridad:

- **HTTPS Detection**: Muestra una advertencia visual si la página no se sirve mediante HTTPS
- **Content Security Policy**: Restringe las fuentes de scripts, estilos y conexiones para prevenir ataques
- **Security Headers**: Incluye headers como X-Content-Type-Options, X-Frame-Options y Referrer-Policy
- **Privacidad**: No se almacenan datos de usuarios, la IP solo se muestra al usuario actual

## Notas

- La página utiliza la API gratuita de ipify.org para obtener la dirección IP
- No se almacenan datos de los usuarios
- Diseñado para ser rápido y accesible
- **Importante**: Para producción, asegúrate de servir la página mediante HTTPS

## Requisitos para Producción

1. Configurar HTTPS con un certificado SSL válido
2. Configurar el dominio saberip.es para apuntar a tu servidor
3. Asegurarse de que todos los recursos se cargan mediante HTTPS
4. Considerar añadir headers de seguridad adicionales en el servidor web

## Licencia

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Créditos

Desarrollado por Alex Provencio para [SaberIP.es](https://saberip.es)

📧 Contacto: [conexionsin@gmail.com](mailto:conexionsin@gmail.com)

🌟 ¿Te gustó este proyecto? ¡Déjame una estrella en GitHub! [⭐ Star on GitHub](https://github.com/alexprovencio/saberipes)

## Hosted on GitHub

🔗 [https://github.com/alexprovencio/saberipes](https://github.com/alexprovencio/saberipes)

Este proyecto está alojado en GitHub. Puedes:
- 🐛 Reportar problemas (issues)
- 📝 Sugerir mejoras
- 🍴 Hacer fork y contribuir
- ⭐ Dar una estrella si te gusta

¡Contribuciones son bienvenidas! 🚀