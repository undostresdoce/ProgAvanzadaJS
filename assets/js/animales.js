class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  constructor(nombre, edad, img, comentarios, sonido) {
    console.log("Creando animal:", nombre);
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  getNombre() {
    console.log("Obteniendo nombre:", this.#nombre);
    return this.#nombre;
  }

  getEdad() {
    console.log("Obteniendo edad:", this.#edad);
    return this.#edad;
  }

  getImg() {
    console.log("Obteniendo imagen:", this.#img);
    return this.#img;
  }

  getComentarios() {
    console.log("Obteniendo comentarios:", this.#comentarios);
    return this.#comentarios;
  }

  setComentarios(comentarios) {
    console.log("Estableciendo comentarios:", comentarios);
    this.#comentarios = comentarios;
  }

  getSonido() {
    console.log("Obteniendo sonido:", this.#sonido);
    return this.#sonido;
  }
}

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  rugir() {
    console.log("León rugiendo");
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  aullar() {
    console.log("Lobo aullando");
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  gruñir() {
    console.log("Oso gruñendo");
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  sisear() {
    console.log("Serpiente siseando");
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  chillar() {
    console.log("Aguila chillando");
  }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
