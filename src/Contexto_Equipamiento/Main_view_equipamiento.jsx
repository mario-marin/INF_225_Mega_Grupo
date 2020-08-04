import React, { Component } from 'react';
import {AddCategoria} from './AddCategoria';


export class MainEquipamiento extends Component {

	constructor(props){
		super(props);
	    this.state = {
	    	selector: 0
	    };
	    this.changeCategoria = React.createRef()
	}

	volver(){
		this.setState({
			selector: 0
		});
	}

	go(value){
		this.setState({
			selector: value
		});
	}


	render() {
		
		const display = {

		}

		return (
			<div>
				{
					this.state.selector == 0 ? 
					(
						<div>
							<h1>Categorias</h1>
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

								<button type="button" onClick={ () => {this.changeCategoria.current.save()}} >Guardar</button> 
								<button type="button" onClick={ () => {this.volver()}} >Volver</button> 
							</div>
						</div>
					) : null
				}
				
			</div>
		);
	}

}