# 📘 Manual Técnico - Proyecto TurisAR

## 1. Descripción general
TurisAR es una aplicación educativa con realidad aumentada (AR) que permite a los usuarios explorar sitios turísticos mediante marcadores visuales, y a administradores gestionar los contenidos del sistema.

## 2. Arquitectura del proyecto

- **Frontend:** HTML, CSS y JavaScript
- **Librerías:** A-Frame + MindAR.js
- **Persistencia:** `sitios.json` como base de datos de contenido
- **Assets:** Imágenes alojadas localmente en `assets/images/`, marcadores en `assets/markers/`

## 3. Estructura de carpetas

```
TurisAR/
├── index.html
├── filtro.html
├── admin.html
├── agregar.html
├── editar.html
├── login.html
├── scripts/
│   ├── main.js
│   ├── admin.js
│   ├── agregar.js
│   ├── editar.js
├── data/
│   └── sitios.json
├── assets/
│   ├── markers/
│   └── images/
├── style/
│   └── main.css
```

## 4. Descripción técnica de componentes

- **index.html:** carga `main.js`, que genera dinámicamente las entidades AR desde `sitios.json`
- **sitios.mind:** contiene los marcadores reconocidos por MindAR (1 solo archivo para todos los sitios)
- **main.js:** se encarga de leer el JSON, asignar targetIndex, mostrar imagen/texto y activar el panel de información
- **filtro.html:** aplica un filtro GLB en el rostro usando `mindar-face-aframe`, permite tomar una foto y volver a index
- **admin.html:** tabla de gestión de sitios turísticos (protección por login)
- **agregar.html / editar.html:** formularios para modificar `sitios.json` localmente, con descarga automática

## 5. Seguridad

- Login básico con `localStorage`, credenciales fijas: `admin` / `admin`
- Redirección automática si no hay sesión activa

## 6. Dependencias externas

- A-Frame 1.5.0
- MindAR 1.2.5 (imagen y facial)

## 7. Limitaciones

- No hay backend: los archivos generados deben descargarse y reemplazarse manualmente
- No se puede escribir directamente en el sistema de archivos desde el navegador