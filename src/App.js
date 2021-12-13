import Comentario from "./components/Comentario"
import Saludo from "./components/Saludo"

function App() {
	return (
		<div>
			<h1>Proyecto desde cero</h1>
			{/* A la llamada del componente le agregamos 
     un prop y le damos un valor. */}
			<Saludo persona="Pedro" edad={30} />
			{/* Para generar props de tipo string se debe igualar el prop 
     al texto entre comillas, si deseamos generar props de tipo
     number, debemos igualar el prop al numero entre corchetes */}
			<Saludo persona="Juan" edad={33} />
			<Saludo persona="Diego" edad={25} />
      <hr />
      <h3>Cajita de comentarios</h3>
			<Comentario
        urlImagen="https://picsum.photos/64"
        persona="Pedro"
        texto="Este es un texto de Pedro"
      />
      <hr />
      <Comentario 
        urlImagen="https://picsum.photos/65"
        persona="Juan"
        texto="Este es un texto de Juan"
      />
      <hr />
      <Comentario 
        urlImagen="https://picsum.photos/66"
        persona="Diego"
        texto="Este es un texto de Diego"
      />
      <hr />
		</div>
	)
}

export default App
