import React, { Component } from 'react';


export class AddCategoria extends Component {

	constructor(props){
		super(props);
	    this.state = {
	    	name: null,
	    	description: null
	    };
	}

	changeName(text){
		this.setState({
			name: text
		});
	}
	changeDescription(text){
		this.setState({
			description: text
		});
	}

	save(){
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => {
      		console.log(xhr.responseText)
    	})
    	//xhr.open('POST', '/categorias')
    	xhr.open('POST', '/categorias')

    	xhr.setRequestHeader('Content-Type', 'application/json');
   
    	xhr.send(JSON.stringify({
    		nombre: this.state.name,
    		descripcion: this.state.description,
    		estado: 10
    	}))
	}



	render() {
		

		const label = {
			display: "block"
		}

		return (
			<div>
				<h1>Agregar una Nueva Categoria</h1>

				<form>
					<label style={label}>
						Nombre
					</label>
					<input type="text" value={this.state.name} onChange={event => this.changeName(event.target.value)} ></input>
					<label style={label}>
						Descripcion
					</label>
					<input type="text" value={this.state.description} onChange={event => this.changeDescription(event.target.value)} >
					</input>
					

				</form>

			</div>
		);
	}

}