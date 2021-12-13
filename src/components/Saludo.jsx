import React from "react"

const Saludo = (props) => {
	// Le entregamos a props como parámetro
	console.log(props)

	return (
		<div className="container mt-5">
			<h2>Saludando a {props.persona}</h2>
			{/* Llamamos nuestro prop persona mediante el parámetro props */}
			<p>Edad: {props.edad}</p>
		</div>
	)
}

export default Saludo
