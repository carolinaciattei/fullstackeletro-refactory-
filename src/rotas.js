import { Switch, Route } from 'react-router-dom'; 

import Produtos from './Paginas/Produtos';
import Pedidos from './Paginas/Pedidos'; 

function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Produtos} /> 
            <Route exact path="/pedidos" component={Pedidos} /> 
        </Switch>
    )
}

export default Rotas;   