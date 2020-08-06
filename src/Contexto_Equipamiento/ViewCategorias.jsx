import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import {EditCategoria} from './EditCategoria';


export class ViewCategorias extends Component {

	constructor(props){
		super(props);
	    this.state = {
	    	data: null,
	    	selector: 0,
			exito_guardar: false,
			edit_categoria_id: null,
			edit_categoria_name: null,
			edit_categoria_description: null
	    };
	    this.changeEdit = React.createRef();
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

	volver(){

		this.props.unhide_button();

		this.get_categorias();
		this.setState({
			selector: 0,
			exito_guardar: false
		});

	}

	go(value,id,name, description){
		this.setState({
			selector: value,
			edit_categoria_id: id,
			edit_categoria_name: name,
			edit_categoria_description: description
		});
	}

	guardar_categoria(){

		this.changeEdit.current.save();

		this.setState({
			exito_guardar: true
		});
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
				{
					this.state.selector == 0 ? (
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
									<td>
										<button type="button" onClick={ () => {this.go(1, categoria.id, categoria.nombre, categoria.descripcion)}} >Editar</button>  
										<button type="button" onClick={ () => {this.nuke_categoria(categoria.id)}} >Eliminar</button>  
									</td>
								</tr>
							)}
							</tbody>
						</Table>

					</div>
					) : null
				}{
					this.state.selector == 1 ? (
					<div>
						<EditCategoria
							id = {this.state.edit_categoria_id} 
							name = {this.state.edit_categoria_name}
							description = {this.state.edit_categoria_description}
							hide_button = {this.props.hide_button.bind(this)}
							ref = {this.changeEdit}
						/>
						<button type="button" onClick={ () => {this.guardar_categoria()}} >Guardar</button> 
						<button type="button" onClick={ () => {this.volver()}} >Volver</button> 
						{
								this.state.exito_guardar ? 
								(
									<div>
										<h2>Accion realizada con exito</h2>
									</div>
								) : null
						}
					</div>
					) : null
				}
				</div>)
			}
				
			</div>
		);
	}

}