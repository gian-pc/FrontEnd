/**
 * elemento.onload
 * función que se dispara cuando se han cargado todos los elementos hijos
 * de un elemento
 */

window.onload = () => {
  let formulario = document.getElementById("formulario");
  let inputEmail = document.getElementById("inputEmail");
  let inputPassword = document.getElementById("inputPassword");
  let enlace = document.getElementById("enlace");
  let helperEmail = document.getElementById("helperEmail");

  const validarEmail = (email) => {
    let regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexEmail.test(email) === false) {
      helperEmail.innerText = "Error, ingrese un correo valido";
      helperEmail.setAttribute("class", "text-danger");
    } else {
      let resultados = usuarios.filter((objUsuario) => {
        if (objUsuario.correo === email) {
          return objUsuario;
        }
      });
      if (resultados.length > 0) {
        helperEmail.innerText = "Error! el email ya esta siendo usado";
        helperEmail.classList.remove("text-success");
        helperEmail.classList.add("text-danger");
        inputEmail.setAttribute("class", "input-danger");
      } else {
        helperEmail.innerText = "BIEN! el email está disponible";
        helperEmail.classList.remove("text-danger");
        helperEmail.classList.add("text-success");
        inputEmail.setAttribute("class", "input-success");
      }
    }
  };

  // ---- OPERADOR TERNARIO -------

  // const validarEmail = (email) => {
  //   let resultados = usuarios.filter(
  //     (objUsuario) => objUsuario.correo === email
  //   );

  //   helperEmail.innerText = resultados.length > 0
  //     ? "Error! el email ya esta siendo usado"
  //     : "BIEN! el email está disponible";
  // };

  /**
   * Funcion que se ejecuta cuando una tecla es presionada y soltada
   * sobre un elemento objetivo
   * @param {*} e
   */
  inputEmail.onkeyup = (e) => {
    // console.log(e);
    // console.log(e.key);
    // console.log('presionando una tecla')

    validarEmail(inputEmail.value.trim());
  };

  /**
   * formulario.onsubmit, evento que se ejecuta cuando se hace
   * submit en un formulario
   */
  formulario.onsubmit = (e) => {
    /**
     * preventDefault => previene todas las acciones automáticas
     * disparadas por cualquier evento
     * ejm: el CLICK EN UN ENLACE <a> redirecciona a una pagina
     * ejm: el SUBMIT de un formulario envía datos al server
     * y actualiza la página
     * ejm: el CLICK DERECHO en cualquier zona, abre un menu
     * contextual en la pagina
     * CONCLUSIÓN: cualquiera de estos eventos pueden ser evitados
     */

    e.preventDefault();
    console.log("submit del formulario");

    let objetoUsuario = {
      usuario: inputEmail.value,
      password: inputPassword.value,
    };
    console.log("Enviando ......");
    console.log(objetoUsuario);
  };
  enlace.onclick = (e) => {
    e.preventDefault();
  };
};
