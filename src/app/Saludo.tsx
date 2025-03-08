//componente normal
function Saludos() {
    return <h2>¡Hola, bienvenido a la pagina de Mabel!</h2>;
  }
  

//props (propiedades)
function Saludo({ nombre }) {
    return <h2>¡Hola, {nombre}!</h2>;
  }
//Usando Estado


  export default Saludo;
  