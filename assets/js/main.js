import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

(function () {
  // Valida antes de registrar
  function validarFormulario() {
    var animal = document.querySelector("#animal").value;
    var edad = document.querySelector("#edad").value;
    var comentarios = document.querySelector("#comentarios").value;

    // Validaciones
    if (!animal || animal === "Selecciona un animal") {
      console.error("Error: No hay ningun animal seleccionado.");
      alert("Wait, ¿no seleccionaste ningún animal? Hazlo");
      return false;
    }

    // Validaciones
    if (!edad || edad === "Selecciona un rango de años") {
      console.error("Error: No se ha seleccionado edad.");
      alert("Ingresa un rango de años primero.");
      return false;
    }

    // Validaciones
    if (!comentarios.trim()) {
      alert("Uy, te falta agregar algún comentario.");
      return false;
    }

    return true;
  }

  // Limpia el formulario
  function limpiarFormulario() {
    console.log("Limpiando formulario...");
    document.querySelector("#animal").value = "Selecciona un animal";
    document.querySelector("#edad").value = "Selecciona un rango de años";
    document.querySelector("#comentarios").value = "";
  }

  // Event-DOM
  document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM ha sido cargado.");
    const btnRegistrar = document.querySelector("#btnRegistrar");
    btnRegistrar.addEventListener("click", () => {
      if (validarFormulario()) {
        console.log("Formulario validado. Registrando...");
        registrarAnimal();
        limpiarFormulario();
      }
    });
  });

  // Registro
  function registrarAnimal() {
    const nombre = document.querySelector("#animal").value;
    const edad = document.querySelector("#edad").value;
    const comentarios = document.querySelector("#comentarios").value;

    console.log(
      `Registrando animal: ${nombre} - ${edad} años - Comentarios: ${comentarios}`
    );

    // Instancia
    let animal;
    switch (nombre) {
      case "Leon":
        animal = new Leon(
          nombre,
          edad,
          "/assets/imgs/Leon.png",
          comentarios,
          "/assets/sounds/Rugido.mp3"
        );
        break;
      case "Lobo":
        animal = new Lobo(
          nombre,
          edad,
          "/assets/imgs/Lobo.jpg",
          comentarios,
          "/assets/sounds/Aullido.mp3"
        );
        break;
      case "Oso":
        animal = new Oso(
          nombre,
          edad,
          "/assets/imgs/Oso.jpg",
          comentarios,
          "/assets/sounds/Grunido.mp3"
        );
        break;
      case "Serpiente":
        animal = new Serpiente(
          nombre,
          edad,
          "/assets/imgs/Serpiente.jpg",
          comentarios,
          "/assets/sounds/Siseo.mp3"
        );
        break;
      case "Aguila":
        animal = new Aguila(
          nombre,
          edad,
          "/assets/imgs/Aguila.png",
          comentarios,
          "/assets/sounds/Chillido.mp3"
        );
        break;
      default:
        console.error("Selecciona un animal de la lista");
        return;
    }

    console.log("Animal registrado correctamente:", animal);

    // Vista previa
    const preview = document.querySelector("#preview");
    preview.innerHTML = "";
    const imgPreview = document.createElement("img");
    imgPreview.src = animal.getImg();
    imgPreview.classList.add("img-fluid", "preview-img");
    preview.appendChild(imgPreview);

    //
    agregarAnimalTabla(animal);
  }

  // Reproduce el sonido
  function reproducirSonidoAnimal(rutaSonido) {
    console.log("Reproduciendo sonido:", rutaSonido);
    const player = document.getElementById("player");
    player.src = rutaSonido;
    player.play();
  }

  // Agrega el animal a la tabla
  function agregarAnimalTabla(animal) {
    console.log("Agregando animal a la tabla:", animal);
    const animalesDiv = document.querySelector("#Animales");
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "m-2");
    //
    const img = document.createElement("img");
    img.src = animal.getImg();
    img.classList.add("card-img-top");

    // Audio
    var sound = document.createElement("audio");
    sound.id = "audio-player";
    sound.controls = "controls";
    sound.src = animal.getSonido();
    sound.type = "audio/mpeg";
    cardDiv.appendChild(sound);

    // Click en la imagen
    img.addEventListener("click", () => {
      console.log("Detalle de animal:", animal);
      mostrarDetalleAnimal(animal, animal.getImg());
    });

    //
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    const nombre = document.createElement("h5");
    nombre.classList.add("card-title");
    nombre.textContent = animal.getNombre();

    const edad = document.createElement("p");
    edad.classList.add("card-text");
    edad.textContent = `Edad: ${animal.getEdad()}`;

    cardBodyDiv.appendChild(nombre);
    cardBodyDiv.appendChild(edad);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    animalesDiv.appendChild(cardDiv);
  }

  // modal
  function mostrarDetalleAnimal(animal, imagenURL) {
    console.log("Mostrando detalle del animal:", animal);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = `
            <div class="text-center text-white"> 
            <img src="${imagenURL}" alt="${animal.getNombre()}">
            <p>${animal.getEdad()}</p>
            <p><strong>Comentarios</strong></p>
            <p>${animal.getComentarios()}</p>
            </div>
        `;

    $("#exampleModal").modal("show");
  }
})();
