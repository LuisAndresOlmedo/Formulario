let valor = document.getElementById("Busqueda");
const button = document.getElementById("Guardando");
const codigoSeg = document.getElementById("Seguridad:");
const etiquetaPos = document.getElementById("Cliente");
var imagenes = document.getElementById("ImagenPerfil");
var Consutas = document.getElementById("Consultas");
var Apellido = document.getElementById("Apellido");
var Inputinit = document.getElementById("Nombres");
var Contraseña = document.getElementById("contraseña");
var dia = document.getElementById("numeroDeFecha");
var mes = document.getElementById("fechaNacimiento");
var Correito = document.getElementById("Correo");
var botoncito = document.getElementById("botoncito");
let EtiquetaP = {};
var Etiquetas = "Se cargaran los datos";
imagenes.src = "./I/Avatar.png";
document.querySelector(".error").style.visibility = "visible";

let Usuario = [
  {
    nombres: "Luis Andres",
    apellido: "Olmedo",
    consultas: "¿Reparaciones?",
    Imagen: "./I/Avatar.png",
    Mes: "2000-09",
    Pass: "1234567",
    dia: "13",
    email: "olmedoluisandres@gmial.com",
    id: 8000,
    Identificador: 0,
  },
  {
    nombres: "Juan",
    apellido: "Carlos",
    consultas: "¿Reparaciones?",
    Imagen: "./I/Usuario 2.png",
    Mes: "2022-07",
    Pass: "1234567",
    dia: "12",
    email: "juancarlos@gmial.com",
    id: 36,
    Identificador: 1,
  },
  {
    nombres: "Jose",
    apellido: "Montenegro",
    consultas: "¿Reparaciones?",
    Imagen: "./I/6773873.png",
    Mes: "2022-07",
    Pass: "1234567",
    dia: "12",
    email: "josemontenegro@gmial.com",
    id: 15,
    Identificador: 2,
  },
  {
    nombres: "Leo",
    apellido: "Villalva",
    consultas: "¿Reparaciones?",
    Imagen: ".I/3135823.png",
    Mes: "2022-07",
    Pass: "1234567",
    dia: "12",
    email: "leonelvillalva@gmial.com",
    id: 10,
    Identificador: 3,
  },
  {
    nombres: "Fernando",
    apellido: "Flores",
    consultas: "¿Reparaciones?",
    Imagen: "./I/3135768.png",
    Mes: "2022-07",
    Pass: "1234567",
    dia: "12",
    email: "fernandoflores@gmial.com",
    id: 9,
    Identificador: 4,
  },
];

let cantidadUsuario = Usuario.length;

etiquetaPos.innerHTML = "<H1>Informacón personal:</H1>" + Etiquetas; //Inicializacion de Elemento.

function azares() {
  var numeroUsuario = cantidadUsuario;
  var azar = Math.random() * 1000000000;
  var redondeo = Math.floor(azar);
  let numeros = numeroUsuario * redondeo;
  return numeros;
}

button.addEventListener("click", () => {
  const exportarid =
    "<p>" + "Codigo se Seguridad:" + Usuario[Usuario.length - 1].id + "</p>";
  codigoSeg.innerHTML = exportarid;
});

//---------------------------------------------------------------------------------Buscador

function Buscar() {
  var Personas = Usuario.find((Encontrado) => Encontrado.id == valor.value);
  if (Personas) {
    pushDatos();
    setTimeout(() => {
      document.querySelector("#error").style.display = "none";
    }, 1000);
    document.querySelector("#Guardando").style.display = "none";
    document.querySelector("#Guardando").style.display = "none";
  } else {
    console.log("Usuario no encontrado");
    document.querySelector("#error").style.background = "rgb(241 137 137)";
  }

  function pushDatos() {
    Inputinit.value = Personas.nombres;
    Apellido.value = Personas.apellido;
    Consutas.value = Personas.consultas;
    Correito.value = Personas.email;
    mes.valor = Personas.Mes;
    imagenes.value = Personas.Imagen;
    dia.value = Personas.dia;
    imagenes.src = Personas.Imagen;
  }
  return Personas.Identificador;
}

function reEditarDatos() {
  var valores = Usuario.push({
    nombres: (Usuario[Constante].nombres = Usuario[Constante].nombres),
    apellido: (Buscar().apellido = Usuario[Constante].apellido),
    consultas: (Buscar().consultas = Usuario[Constante].consultas),
    id: (Buscar().id = Usuario[Constante].id),
    Imagen: (Buscar().Imagen = Usuario[Constante].Imagen),
  });
}

//---------------------------------------------------------------------------------Buscador

function DatosUsuarios() {
  soloNombre = Inputinit.value;
  soloApellido = Apellido.value;
  soloImagen = imagenes.src;
  soloDia = dia.value;
  soloConsultas = Consutas.value;
  soloContra = Contraseña.value;
  soloMes = mes.value;
  soloEmail = Correito.value;

  soloNombre = Usuario.push({
    nombres: soloNombre,
    apellido: soloApellido,
    Imagen: soloImagen,
    email: soloEmail,
    Pass: soloContra,
    dia: soloDia,
    Mes: soloMes,
    consultas: soloConsultas,
    Identificador: cantidadUsuario,
    id: azares(),
  });

  ImprimirDatos();
}

//---------------------------------------------------------------------------------Pusheo de Datos

function ImprimirDatos() {
  const valorUsuario = Usuario.find(
    (Encontrado) => Encontrado.id == valor.value
  );
  if (valorUsuario) {
    var Constante = valorUsuario.Identificador;
    Datos =
      "<spam>Nombre:</spam>" +
      Usuario[Constante].nombres +
      "<br/>" +
      "<br/>" +
      "<spam>Apellido:</spam>" +
      Usuario[Constante].apellido +
      "<br/>" +
      "<br/>" +
      "<spam>Consultas:</spam>" +
      Usuario[Constante].consultas +
      "<br/>" +
      "<br/>" +
      "<spam>Codigo Secreto:</spam>" +
      Usuario[Constante].id;
    etiquetaPos.innerHTML = "<H1>Cargados:</H1>" + Datos;
  } else {
    etiquetaPos.innerHTML = "<spam>Se ha guardado tu usuario ✔</spam>";
  }
}

function Renombrar() {
  const valorUsuario = Usuario.find(
    (Encontrado) => Encontrado.id == valor.value
  );
  var Constante = valorUsuario.Identificador;
  Usuario[Constante].nombres = Inputinit.value;
  Usuario[Constante].apellido = Apellido.value;
  Usuario[Constante].consultas = Consutas.value;
  Usuario[Constante].Pass = Contraseña.value;
  Usuario[Constante].email = Correito.value;
  Usuario[Constante].Mes = mes.value;
  Usuario[Constante].dia = dia.value;
  ImprimirDatos();
}

// Imprime el nombre de un arrays