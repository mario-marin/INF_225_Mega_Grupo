import React, { Component } from 'react';


export class ViewCategorias extends Component {

	constructor(props){
		super(props);
	    this.state = {
	    	data: null
	    };
	}

	get_categorias(){
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => {
      		//console.log(xhr.responseText)
      		var raw_data = xhr.responseText;
      		var converted_data = JSON.parse(raw_data);
      		this.setState({
				data: converted_data
			});
    	})
    	xhr.open('GET', '/categorias');

    	xhr.setRequestHeader('Content-Type', 'application/json');
   
    	xhr.send();
	}

	componentDidMount() {
		this.get_categorias();
	}

	render() {
		

		const label = {
			display: "block"
		}

		return (
			<div>
			{
				this.state.data == null ? (<div>Cargando...</div>) : (
				<div>
					Nombre	Descripcion
					{this.state.data.map ((categoria) => 
						<div>
							{categoria.nombre} {categoria.descripcion}
						</div>

					)}
				</div>
				)
			}
				
			</div>
		);
	}

}