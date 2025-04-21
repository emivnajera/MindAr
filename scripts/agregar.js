document.getElementById("form-agregar").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const nombreArchivo = document.getElementById("archivo").value.trim(); // ej: tikal.jpg
  const web = document.getElementById("web").value.trim();
  const ubicacion = document.getElementById("ubicacion").value.trim();

  // Extraer extensión
  const extension = nombreArchivo.split(".").pop().toLowerCase();

  // Usar primera palabra del nombre como base del archivo
  const nombreImagen = nombre.split(" ")[0].toLowerCase();

  // Ruta final a guardar en el JSON
  const rutaImagen = `assets/images/${nombreImagen}.${extension}`;

  const nuevoSitio = {
    id: nombre.toLowerCase().replace(/\s+/g, "-"),
    nombre,
    descripcion,
    imagen: rutaImagen,
    web,
    ubicacion
  };

  try {
    const res = await fetch("data/sitios.json");
    const sitios = await res.json();
    sitios.push(nuevoSitio);

    const blobJSON = new Blob([JSON.stringify(sitios, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blobJSON);
    link.download = "sitios.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.location.href = "admin.html";
    }, 800);
  } catch (error) {
    alert("❌ Error al guardar el sitio: " + error);
  }
});
