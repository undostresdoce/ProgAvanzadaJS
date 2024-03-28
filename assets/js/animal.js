async function obtenerImagenes() {
  try {
    console.log("Realizando consulta async");
    const response = await fetch("animales.json");
    if (!response.ok) {
      throw new Error("Error: " + response.statusText);
    }
    console.log("Datos obtenidos . Procesando...");
    const data = await response.json();
    console.log("Procesado. Img:", data.imagenes);
    return data.imagenes;
  } catch (error) {
    console.error("Uy, ocurrió un error:", error.message);
    throw error;
  }
}

export default obtenerImagenes;
