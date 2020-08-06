import React, { Component } from 'react';
import {AddCategoria} from './AddCategoria';
import {ViewCategorias} from './ViewCategorias';


export class MainEquipamiento extends Component {

	constructor(props){
		super(props);
	    this.state = {
	    	selector: 0,
	    	exito_guardar: false,
	    	hide_create: false
	    };
	    this.changeCategoria = React.createRef()
	}

	volver(){
		this.setState({
			selector: 0,
			exito_guardar: false
		});
	}

	go(value){
		this.setState({
			selector: value
		});
	}

	guardar_categoria(){

		this.changeCategoria.current.save();

		this.setState({
			exito_guardar: true
		});
	}

	hide_create_cat(){
		this.setState({
			hide_create: true
		});
	}

	unhide_create_cat(){
		this.setState({
			hide_create: false
		});
	}


//importante, dato de como realizar la comunicacion desde hijos a padres: https://www.pluralsight.com/guides/how-to-handle-communication-between-parent-and-child-components-in-reactjs
	render() {
		
		return (
			<div>
				{
					this.state.selector == 0 ? 
					(
						<div>
							{
								this.state.hide_create ? (null) : (
									<h1>Categorias</h1>
								)
							}
							
							<div>
								<ViewCategorias
								hide_button = {this.hide_create_cat.bind(this)}
								unhide_button = {this.unhide_create_cat.bind(this)}
								/>
							</div>
							{
								this.state.hide_create ? (null) : (
									<div>
										<button type="button" onClick={ () => {this.go(1)}} >Crear categoria</button>
									</div>
									)
							}
							
						</div>
					) : null
				}
				{
					this.state.selector == 1 ? 
					(
						<div>
							<div>
								<AddCategoria
									ref = {this.changeCategoria}
								/>
							</div>

							<div>

								<button type="button" onClick={ () => {this.guardar_categoria()}} >Guardar</button> 
								<button type="button" onClick={ () => {this.volver()}} >Volver</button> 
							</div>

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
				
			</div>
		);
	}

}