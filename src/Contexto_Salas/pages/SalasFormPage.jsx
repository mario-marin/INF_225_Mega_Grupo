import React, {useState} from "react";
import  { Container, Col, Form, FormGroup, Input, Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import salasService from '../services/salas.services';
import NavigationComponent from "../components/NavigationComponent";
import { FormLabel, FormControl, FormCheck } from "react-bootstrap";

const SalasFormPage = () => {

    const [tipoSala, setTipoSala] = useState('')
    const [equipamiento, setEquipamento] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');

    const handleChange = (event) =>{
        const keyname = event.target.name;
        if (keyname === "tipoSala") {
            setTipoSala(event.target.value);
        } else if (keyname === "equipamiento") {
            setEquipamento(event.target.value);
        } else if (keyname === "disponibilidad"){
            setDisponibilidad(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        salasService.addSalas(tipoSala,equipamiento,disponibilidad).then(response => {
            console.log(response);
        });
    }

    return(
        <React.Fragment >
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <NavigationComponent></NavigationComponent>
            <Container fluid>
                <Container>
                    <Form>
                        <Card>
                            <CardHeader>Agregar una nueva sala.</CardHeader>
                            <CardBody>                  
                                    <Container>
                                    <FormGroup>
                                        <FormLabel> Tipo de Sala </FormLabel>
                                        <FormControl as='select' name='tipoSala' size='lg' onChange = {(event) => handleChange(event)}>
                                            <option></option>
                                            <option>Pabellon</option>
                                            <option>Descanso</option>
                                        </FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Equipo de la Sala</FormLabel>
                                        <FormControl as='textarea' rows='4' name='equipamiento' onChange = {(event) => handleChange(event)}></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel> Disponible </FormLabel>
                                        <FormControl as='select' size='lg' name='disponibilidad' onChange = {(event) => handleChange(event)}>
                                            <option></option>
                                            <option>True</option>
                                            <option>False</option>
                                        </FormControl>
                                    </FormGroup>
                                    </Container>
                                    <br />
                                <Container>
                                   <Button type= "submit" color="primary" onClick ={(event) => handleSubmit(event)}>Submit</Button>
                                </Container>
                            </CardBody>
                        </Card>
                    </Form>
                </Container>    
            </Container>
        </React.Fragment>
    );
} 

export default SalasFormPage;