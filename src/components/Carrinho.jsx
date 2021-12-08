import React from 'react'
import Header from './Header'
import './Carrinho.css'

function Carrinho() {
    const [produtos, setProdutos] = React.useState(null)
    const [precototal, setTotal] = React.useState(0)
   
    

    function carrinhoToArray(array){
        let itens = []
        for(let value of Object.keys(array)){
            itens.push(array[value])
        }
        setProdutos(itens)
        console.log(itens);
    }

    React.useEffect(() => {
        let itens = window.localStorage.getItem('cart')
        let jsonitens = JSON.parse(itens)
        console.log(jsonitens);
        carrinhoToArray(jsonitens)
    }, [])

    function getTotal(){
        let total = 0
        produtos.forEach(prod => {
            total = total + (prod.quantity * prod.preco)
        });
        setTotal(total)
    }

    return (
        <div>
            <Header />
            <div className="body">
                <table className="carrinho">
                    <tr>
                        <td><h1>Imagem</h1></td>
                        <td><h1>Nome</h1></td>
                        <td><h1>Quantidade</h1></td>
                        <td><h1>Preço total</h1></td>
                    </tr>
                {produtos && produtos.map(product=>{
                    return (
                        <tr key={product.id}>
                            <td ><img src={product.foto} alt={product.nome} className="img"/></td>
                            <td className='nome'>{product.nome}</td>
                            <td className='quantidade' >{product.quantity}</td>
                            <td className='preco' >R$ {product.quantity * product.preco}</td>
                        </tr>
                        )
                })}
                </table>
                <div>
                    <h2>R$ {precototal}</h2>
                    <button>
                        Finalizar compra
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default Carrinho
