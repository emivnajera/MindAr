# 🧑‍💻 Manual de Usuario - TurisAR

## 1. ¿Qué es TurisAR?

TurisAR es una aplicación que permite explorar lugares turísticos de Guatemala y del mundo mediante realidad aumentada, así como aplicar filtros faciales divertidos, todo desde el navegador web.

---

## 2. Modo Usuario (Visitante)

### 🔍 Explorar sitios turísticos
1. Abre `index.html`
2. Apunta tu cámara a uno de los marcadores impresos o en pantalla
3. Verás una imagen flotante y el nombre del sitio
4. Se mostrará un panel con descripción, web y mapa

### 😎 Usar filtro facial
1. Haz clic en “🎭 Usar filtro facial”
2. Se activará la cámara con un filtro 3D
3. Haz clic en “📸 Tomar foto” para guardarla
4. La app te redirigirá automáticamente al inicio

---

## 3. Modo Admin (Solo autorizado)

### 🔐 Iniciar sesión
1. Abre `login.html`
2. Ingresa:
   - Usuario: `admin`
   - Contraseña: `admin`
3. Accederás a la tabla de sitios

### ➕ Agregar sitio
1. Haz clic en “Agregar nuevo sitio”
2. Llena el formulario (nombre, descripción, imagen, web, ubicación)
3. Se descargará un nuevo `sitios.json`
4. Reemplaza manualmente el archivo original en `data/`

### ✏️ Editar sitio
1. Clic en “✏️” en el sitio deseado
2. Modifica los datos
3. Descarga el JSON actualizado

### 🗑️ Eliminar sitio
1. Clic en el botón 🗑️
2. Confirma
3. El sitio se elimina de la tabla (y del JSON descargable)

---

## 4. Recomendaciones

- Asegúrate de reemplazar manualmente los archivos descargados (`sitios.json` y las imágenes)
- Las imágenes deben subirse a `assets/images/` y seguir el formato `nombreminúscula.extensión`
- Si se pierde la sesión, deberás volver a iniciar sesión en `login.html`