import React from 'react'
import { useParams } from 'react-router'
import Header from './Header'
import './FullProduto.css'
import {Cartcontext} from '../CartContext.js'


function FullProduto() {
    const contexto = React.useContext(Cartcontext)
    console.log(contexto);
    
    const params = useParams()
    const [produto, setProduto] = React.useState(null)


    React.useEffect(() => {
        
        async function getProduto(){
            const noCarrinho = window.localStorage.getItem('produtos')
            const response = await fetch(`http://localhost:6060/produtos/${params.productId}`)
            const json = await response.json()
            setProduto(json)
        }
        getProduto()
    }, [])

    function getCategoria(id){
        switch (id){
            case 1:
                return 'Video Games'
                break
            case 2:
                return 'Smartphones'
                break
            case 3: 
                return 'Outros'
                break
        }
    }

    function addCart(){
        contexto.addToCart(produto)
    }


    if (produto === null) return null
    return (
            <div>
                <Header/>
                <section className="fullproduto">
                    <div>
                        <h1>{produto.nome}</h1>
                        <p>Descrição: {produto.descricao}</p>
                        <h3 className='preco'>R$ {produto.preco}</h3>
                        <h3 className='categoria'>Categoria: {getCategoria(produto.categoria_id)}</h3>
                        <button onClick={addCart}>Adicionar ao carrinho</button>
                    </div>
                    <img src={produto.foto} alt={produto.nome} />
                </section>
            </div>
    )
}

export default FullProduto
