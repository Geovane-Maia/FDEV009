function Produto(props) {

    console.log(props)
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.src} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.titulo}
                    </h5>
                    <p className="card-text">
                        {props.children}
                    </p>
                    <p>
                        Valor R$ {props.valor}
                    </p>
                    <a href="#" className="btn btn-primary">Adicionar no Carrinho</a>
                </div>
            </div>
        </>
    )
}

export default Produto;