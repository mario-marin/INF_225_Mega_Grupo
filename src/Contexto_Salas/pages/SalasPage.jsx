import React,{useState, useEffect} from 'react';
import  { Container, Col, Form, FormGroup, Input, Button, Card, Table, CardHeader, CardBody, CardFooter, ButtonDropdown } from 'reactstrap';
import NavigationComponent from '../components/NavigationComponent';
import salasService from '../services/salas.services';
import { FormLabel, FormControl, FormCheck } from "react-bootstrap";

const SalasPage = () => {

    const [salas, setSalas] = useState([]);
    const [tipoSala, setTipoSala] = useState('')
    useEffect(() => {
        salasService.getSalas().then(res =>{
            setSalas(res.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    
  const salasItems = salas.map((sala) =>
  <tr key={sala.id}>
      <td> {sala.id} </td>
      <td> {sala.tipoSala} </td>
      <td> {sala.equipamiento}</td>
      <td> {sala.disponibilidad}</td>
  </tr>
);

const handleChange = (event) =>{
    const keyname = event.target.name;
    if (keyname === "id") {
        salasService.getSalasById(keyname).then(res =>{
            setSalas(res.data);
        }).catch(error =>{
            console.log(error);
        });
    } else if (keyname === "tipoSala"){
            salasService.getSalasByTipo(keyname).then(res =>{
                setSalas(res.data);
            }).catch(error =>{
                console.log(error);
            }
        )
    }
}
const handleSubmit = (event)=>{
    event.preventDefault();
    salasService.getSalasByTipo(tipoSala).then(response =>{
        console.log(response);
    });

}

    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossOrigin="anonymous"></link>
            <NavigationComponent></NavigationComponent>
                <Container>
                    <br></br>
                    <Card>
                        <CardHeader>Buscar Sala</CardHeader>
                        <CardBody>
                            <Form>
                                <FormLabel>Por id</FormLabel>
                                <FormControl type="text" name="id"  onChange ={(event) => handleChange(event)}/>
                                <br></br>
                                <FormControl as='select' name='tipoSala' size='lg' onChange = {(event) => handleChange(event)}>
                                            <option></option>
                                            <option>Pabellon</option>
                                            <option>Descanso</option>
                                </FormControl>
                                <Button type= "submit" color="primary" onClick ={(event) => handleSubmit(event)}>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                    <br/>
                    <Col>
                    <Table>
                        <thead> 
                            <tr>
                                <th> Id </th>
                                <th> Tipo de sala </th>
                                <th> Equipamiento</th>
                                <th> Disponibilidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salasItems}
                        </tbody>
                    </Table>
                </Col>
                </Container>
        </div>
    )
}

export default SalasPage;