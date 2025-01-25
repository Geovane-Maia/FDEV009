import Produto from "../components/Produto";

function Main() {
    return (
        <main>
            <div className="row p-4">
                <div className="col">
                    <Produto 
                        titulo="Mouse USB" 
                        valor="15,99"
                        src="https://m.media-amazon.com/images/I/51O4iw8SuCL.jpg"
                    >
                        Mouse USB, RGB, Gamer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos commodi hic, asperiores sit saepe itaque modi at numquam illum laudantium porro et, accusamus totam ea nam neque sunt distinctio similique!
                    </Produto>
                </div>
                <div className="col">
                    <Produto titulo="Teclado USB"valor="35,99" src="https://images0.kabum.com.br/produtos/fotos/588420/teclado-semi-mecanico-gamer-rise-mode-g1-rainbow-usb-branco-e-cinza-rm-tg-01-wg_1730978442_g.jpg">
                        Teclado USB, RGB, Gamer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos commodi hic, asperiores sit saepe itaque modi at numquam illum laudantium porro et, accusamus totam ea nam neque sunt distinctio similique!
                    </Produto>
                </div>
                <div className="col">
                    <Produto titulo="Monitor 24P" valor="1.500,99" src="https://m.media-amazon.com/images/I/51O4iw8SuCL.jpg">
                        Monitor 24P, Full HD, Gamer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos commodi hic, asperiores sit saepe itaque modi at numquam illum laudantium porro et, accusamus totam ea nam neque sunt distinctio similique!
                    </Produto>
                </div>
                <div className="col">
                    <Produto titulo="Estabilizador" valor="500,99" src="https://m.media-amazon.com/images/I/51O4iw8SuCL.jpg">
                        Estabilizador, Gamer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos commodi hic, asperiores sit saepe itaque modi at numquam illum laudantium porro et, accusamus totam ea nam neque sunt distinctio similique!
                    </Produto>
                </div>
            </div>
            
            
        </main>
    )
}

export default Main;