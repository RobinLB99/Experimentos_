const botonCambiarTema = document.querySelector("#cambiar-tema");

botonCambiarTema.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});
