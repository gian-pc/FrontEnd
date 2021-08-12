let lista = document.getElementById("lista");
let btnGenerar = document.getElementById("btnGenerar");

btnGenerar.onclick = () => {
  /**
   * document.createElement("etiqueta_del_elemento")
   * retorna un elemento HTML que aún no esta en el DOM
   * imaginemos que dicho elemento está en el limbo
   */
  let liTemporal = document.createElement("li");
  let numeroAleatorio = (Math.random() * (45 - 1) + 1).toFixed(0);
  liTemporal.innerText = numeroAleatorio;
  /**
   * elemento.setAttribute("nombre_del_atributo","valor_del_atributo")
   * coloco un atributo al elemento con un respectivo valor
   * (hablamos de atributos HTML ejm: id,class,border,name,value)
   */
  liTemporal.setAttribute("class", "lista-item");
  liTemporal.onclick = () => {
    console.log(`Uy! alguien está click en ${numeroAleatorio}`);
  };

  /**
   * elemento.appenChild(elemento), agrega como hijo final al elemento
   * recibido por parámetros
   * elemento.before(elemento), análogamente inserta un hijo al inicio
   * de los elementos hijos
   */
  lista.appendChild(liTemporal);

  /**
   * Reto:
   * - permitir com máximo 7 números de lotería
   * - validar que si un número se repite, salga otro
   * HINT: Usar un arreglo para guardar los números y sacar la cantidad de números
   */
};

/**
 * document.onkeyup=(e)=>{if(e.key==="X"){hacer algo aqui}}
 * html
 */
