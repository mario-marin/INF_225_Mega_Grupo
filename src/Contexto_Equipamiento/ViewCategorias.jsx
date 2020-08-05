import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


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
      		console.log(xhr.responseText)
      		var raw_data = xhr.responseText;
      		var converted_data = JSON.parse(raw_data);
      		console.log(converted_data);

      		var proceced_data = [];

      		for (var i = 0; i < converted_data.length; i++) {
      			let data = converted_data[i];
      			if (data.estado != 90) {
      				proceced_data.push(data);
      			}
      		}
      		console.log(proceced_data);

      		this.setState({
				data: proceced_data
			});
    	})
    	xhr.open('GET', '/categorias');

    	xhr.setRequestHeader('Content-Type', 'application/json');
   
    	xhr.send();
	}

	nuke_categoria(id){

		//console.log(id);
		
		var xhr = new XMLHttpRequest();

		xhr.addEventListener('load', () => {
			this.get_categorias();
		});

		xhr.open('DELETE', '/categorias/'+id);

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
					<Table striped bordered hover>
						<thead>
					    	<tr>
						      <th>Nombre</th>
						      <th>Descripcion</th>
						      <th>Accion</th>
					    	</tr>
					  	</thead>
					  	<tbody>
						{this.state.data.map ((categoria) => 
							<tr>
								<td>{categoria.nombre}</td>
								<td>{categoria.descripcion}</td>
								<td> <button type="button" onClick={ () => {this.nuke_categoria(categoria.id)}} >Eliminar</button>  </td>
							</tr>
						)}
						</tbody>
					</Table>
				</div>
				)
			}
				
			</div>
		);
	}

}