let sitios = [];
let sitioEditarIndex = -1;

async function cargarDatosSitio() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const res = await fetch("data/sitios.json");
  sitios = await res.json();

  sitioEditarIndex = sitios.findIndex(s => s.id === id);
  if (sitioEditarIndex === -1) {
    alert("❌ Sitio no encontrado.");
    window.location.href = "admin.html";
    return;
  }

  const sitio = sitios[sitioEditarIndex];
  document.getElementById("nombre").value = sitio.nombre;
  document.getElementById("descripcion").value = sitio.descripcion;

  const ext = sitio.imagen.split('.').pop();
  document.getElementById("archivo").value = `${sitio.imagen.split('/').pop().split('.')[0]}.${ext}`;

  document.getElementById("web").value = sitio.web;
  document.getElementById("ubicacion").value = sitio.ubicacion;
}

document.getElementById("form-editar").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const archivo = document.getElementById("archivo").value.trim(); // con extensión
  const web = document.getElementById("web").value.trim();
  const ubicacion = document.getElementById("ubicacion").value.trim();

  const extension = archivo.split('.').pop();
  const nombreImg = nombre.split(" ")[0].toLowerCase();
  const rutaImagen = `assets/images/${nombreImg}.${extension}`;

  sitios[sitioEditarIndex] = {
    id: nombre.toLowerCase().replace(/\s+/g, "-"),
    nombre,
    descripcion,
    imagen: rutaImagen,
    web,
    ubicacion
  };

  // Descargar nuevo JSON
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
});

cargarDatosSitio();
