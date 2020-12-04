export default function Produto(props) {
    return (
        <figure className={props.categoria + " produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"}>
        <img className="imagem" src={require(`./img/${props.imagem}`).default}  alt="Imagem de Produtos" /> 
        <figcaption className="descricao"> 
                {props.descricao}
            <p className="precoantigo"> 
                R$ {props.precofinal} 
            </p>
            </figcaption>
        </figure> 
    ); 
}