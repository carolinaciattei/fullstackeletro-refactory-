import { useState, useEffect }  from 'react'; 

import { Container, Row } from 'react-bootstrap'; 
import Produto from '../Components/Produto'; 



function Produtos() {
    const [produtos,setProdutos] = useState([]); 

    useEffect(async () => { 
        const answer = await fetch("http://localhost/recode-projetos/fullstackeletro-js/produtos.php")
        const data = await answer.json(); 
        setProdutos(data); 

    }, []); 


return (
<Container>
            <Row>
                { produtos && produtos.map(item => <Produto key={item.idproduto} imagem={item.imagem} descricao={item.descricao} precofinal={item.precofinal} categoria={item.categoria} /> )}
            </Row>
        </Container>

    ); 
}; 

export default Produtos; 
