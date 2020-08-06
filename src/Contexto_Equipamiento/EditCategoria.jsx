import React, { Component } from 'react';


export class EditCategoria extends Component {

	constructor(props){
		super(props);
	    this.state = {
	    	name: this.props.name,
	    	description: this.props.description
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
    	xhr.open('PUT', '/categorias');

    	xhr.setRequestHeader('Content-Type', 'application/json');
   
    	xhr.send(JSON.stringify({
    		idcategoria: this.props.id,
    		nombre: this.state.name,
    		descripcion: this.state.description,
    		estado: 80
    	}))
	}

	componentDidMount() {
		this.props.hide_button();
	}

	render() {
		

		const label = {
			display: "block"
		}

		return (
			<div>
				<h1>Editar una Categoria</h1>

				<form>
					<label style={label}>
						Nombre
					</label>
					<input type="text" value={this.state.name} onChange={event => this.changeName(event.target.value)} ></input>
					<label style={label}>
						Descripcion
					</label>
					<textarea type="text" value={this.state.description} onChange={event => this.changeDescription(event.target.value)} >
					</textarea>
					

				</form>

			</div>
		);
	}

}