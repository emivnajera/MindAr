async function cargarSitios() {
  try {
    const res = await fetch("data/sitios.json");
    const sitios = await res.json();

    const escena = document.querySelector("a-scene");
    const assets = document.querySelector("#assets");

    sitios.forEach((sitio, index) => {
      // Cargar imagen como asset
      const img = document.createElement("img");
      img.setAttribute("id", sitio.id);
      img.setAttribute("src", sitio.imagen);
      assets.appendChild(img);

      // Crear entidad AR y forzar el targetIndex correctamente
      const entidad = document.createElement("a-entity");

      // ⚠️ Hacemos el setAttribute en dos pasos para evitar errores de timing
      setTimeout(() => {
        entidad.setAttribute("mindar-image-target", `targetIndex: ${index}`);
        console.log(`✅ Asignado targetIndex ${index} a ${sitio.nombre}`);
      }, 0);

      // Crear plano con imagen del sitio
      const plano = document.createElement("a-plane");
      plano.setAttribute("src", `#${sitio.id}`);
      plano.setAttribute("width", "1");
      plano.setAttribute("height", "0.6");
      plano.setAttribute("position", "0 0 0");

      // Crear texto flotante con el nombre
      const texto = document.createElement("a-text");
      texto.setAttribute("value", sitio.nombre);
      texto.setAttribute("align", "center");
      texto.setAttribute("width", "1.5");
      texto.setAttribute("position", "0 -0.5 0");
      texto.setAttribute("color", "#FFD700");

      // Armar y agregar a la escena
      entidad.appendChild(plano);
      entidad.appendChild(texto);
      escena.appendChild(entidad);

      // Mostrar u ocultar el panel informativo
      entidad.addEventListener("targetFound", () => {
        document.getElementById("info-panel").style.display = "block";
        document.getElementById("titulo").innerText = sitio.nombre;
        document.getElementById("descripcion").innerText = sitio.descripcion;
        document.getElementById("web").href = sitio.web;
        document.getElementById("mapa").href = sitio.ubicacion;
      });

      entidad.addEventListener("targetLost", () => {
        document.getElementById("info-panel").style.display = "none";
      });
    });

    // Botón para ir al filtro facial
    const filtroBtn = document.getElementById("filtro-btn");
    if (filtroBtn) {
      filtroBtn.addEventListener("click", () => {
        window.location.href = "filtro.html";
      });
    }
  } catch (error) {
    console.error("❌ Error al cargar los sitios:", error);
  }
}

// Asegurar que cargue después de que la escena está completamente lista
window.addEventListener("load", () => {
  const escena = document.querySelector("a-scene");

  if (escena.hasLoaded) {
    cargarSitios();
  } else {
    escena.addEventListener("loaded", cargarSitios);
  }
});
