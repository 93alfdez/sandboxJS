const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);

const numeroParaAcertar = generarNumeroAleatorio();

const NO_ES_UN_NUMERO = 0;
const EL_NUMERO_ES_MAYOR = 1;
const EL_NUMERO_ES_MENOR = 2;
const ES_EL_NUMERO_SECRETO = 3;
const GAME_OVER_MAXIMO_INTENTOS = 4;

const maximoIntentos = 5;
let numeroIntentos = 0;

const hasSuperadoElNumeroDeIntentos = () => numeroIntentos > maximoIntentos;

const muestraNumeroIntentos = () => {
  document.getElementById(
    "intentos"
  ).innerHTML = `${numeroIntentos} de ${maximoIntentos}`;
};

document.addEventListener(`DOMContentLoaded`, muestraNumeroIntentos);

const gestionarGameOver = (estado) => {
  if (estado === GAME_OVER_MAXIMO_INTENTOS) {
    document.getElementById("comprobar").disabled = true;
  }
};

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";

  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `${texto} no es un número`;
      break;
    case EL_NUMERO_ES_MAYOR:
      mensaje = `El número ${texto} es mayor que el número a acertar`;
      break;
    case EL_NUMERO_ES_MENOR:
      mensaje = `El número ${texto} es menor que el número a acertar`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = "¡¡¡Enhorabuena, has acertado el número!!!";
      break;
    case GAME_OVER_MAXIMO_INTENTOS:
      mensaje = "GAME OVER, has superado el número de intentos";
      break;
    default:
      mensaje = "No deberías estar aquí";
      break;
  }

  document.getElementById("resultado").innerHTML = mensaje;
};

const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    return NO_ES_UN_NUMERO;
  }

  if (numero === numeroParaAcertar) {
    return ES_EL_NUMERO_SECRETO;
  }

  if (hasSuperadoElNumeroDeIntentos()) {
    return GAME_OVER_MAXIMO_INTENTOS;
  }

  return numero > numeroParaAcertar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
};

const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  numeroIntentos++;
  muestraNumeroIntentos();
  gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebaClick);
