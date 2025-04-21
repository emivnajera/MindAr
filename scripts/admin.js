let sitios = [];

async function cargarSitios() {
  try {
    const res = await fetch("data/sitios.json");
    sitios = await res.json();
    renderTabla();
  } catch (error) {
    console.error("Error al cargar sitios.json:", error);
  }
}

function renderTabla() {
  const tbody = document.querySelector("#tabla-sitios tbody");
  tbody.innerHTML = "";

  sitios.forEach((sitio, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${sitio.nombre}</td>
      <td>${sitio.descripcion}</td>
      <td><a href="${sitio.imagen}" target="_blank">Ver imagen</a></td>
      <td><a href="${sitio.web}" target="_blank">Sitio web</a></td>
      <td><a href="${sitio.ubicacion}" target="_blank">Mapa</a></td>
      <td class="acciones">
        <button onclick="editarSitio('${sitio.id}')" style="background-color:#f0ad4e; color:white; border:none; padding:0.3rem 0.6rem; border-radius:4px; cursor:pointer;">✏️</button>
        <button onclick="eliminarSitio(${index})" style="background-color:#e74c3c; color:white; border:none; padding:0.3rem 0.6rem; border-radius:4px; cursor:pointer;">🗑️</button>
      </td>

    `;

    tbody.appendChild(fila);
  });
}

function eliminarSitio(index) {
  const sitio = sitios[index];
  const confirmar = confirm(`¿Eliminar el sitio "${sitio.nombre}"?`);
  if (!confirmar) return;

  sitios.splice(index, 1);
  renderTabla();
}

function descargarJSON() {
  const blob = new Blob([JSON.stringify(sitios, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "sitios.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function editarSitio(id) {
    window.location.href = `editar.html?id=${id}`;
  }
  
window.addEventListener("DOMContentLoaded", cargarSitios);
