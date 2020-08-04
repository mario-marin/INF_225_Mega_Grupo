import React, { Component } from 'react';
import {AddCategoria} from './AddCategoria';


export class MainEquipamiento extends Component {

	constructor(props){
		super(props);
	    this.state = {

	    };
	    this.changeCategoria = React.createRef()
	}


	render() {
		



		return (
			<div>
				<div>
					<AddCategoria
						ref = {this.changeCategoria}
						/>
				</div>
				<div>

					<button type="button" onClick={ () => {this.changeCategoria.current.save()}} >Guardar</button> 
					<button type="button" onClick={ () => {this.enable_carousel()}} >Volver</button> 
				</div>
			</div>
		);
	}

}