import {useState} from 'react'; 
import { Form, Button, Row } from 'react-bootstrap'; 

export default function Pedidos() {
    const [ form, setForm ] = useState({
        nome:"",
        endereco: "", 
        fone: "",
        valor: "",
        quantidade: "",
        precofinal: "", 
    })

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        console.log(form)
        setForm({
            ...form, 
            [evento.target.id]: evento.target.value

        })
        console.log(form); 
    }

    const controleEnvio = (evento) => { 
        evento.preventDefault(); 
        const precofinal = parseFloat(form.valor) * parseFloat(Form.quantidade); 
        documento.getElementById("precofinal").value = `R$ ${precofinal}`; 
    }

    return (
        <Row>  
            <div className="col-lg-6 col-md-6-mx-auto"> 
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer Pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudança} type="text" id="nome" /> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control onChange={controleMudança} type="text" id="endereco" /> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={controleMudança} type="text" id="telefone" /> 
                    </Form.Group>
                    <Form.Group> 
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control onChange={controleMudança} type="text" id="produto" /> 
                    </Form.Group>
                    <Form.Group> 
                    <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control onChange={controleMudança} type="text" id="telefone" /> 
                    </Form.Group> 
                    <Form.Group>
                    <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudança} type="text" id="quantidade" />
                    </Form.Group>
                    <Form.Group> 
                        <Form.Label>Preço Final</Form.Label>
                        <Form.Control disabled type="text" id="precofinal" />
                    </Form.Group>
                <Buttom variant="primary" type="submit">
                    Cadastrar</Buttom>
                </Form>
            </div> 
            </Row>