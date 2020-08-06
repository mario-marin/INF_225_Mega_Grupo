import React, { Component } from 'react';
import {AddCategoria} from './AddCategoria';
import {ViewCategorias} from './ViewCategorias';


export class MainEquipamiento extends Component {

	constructor(props){
		super(props);
	    this.state = {
	    	selector: 0,
	    	exito_guardar: false
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


	render() {
		
		return (
			<div>
				{
					this.state.selector == 0 ? 
					(
						<div>
							<h1>Categorias</h1>
							<div>
								<ViewCategorias/>
							</div>
							<div>
								<button type="button" onClick={ () => {this.go(1)}} >Crear categoria</button>
							</div>
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