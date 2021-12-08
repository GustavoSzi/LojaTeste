import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Cartcontext } from '../CartContext';
import './Produto.css'

function Produto({prod, carrinho}) {

    return (
        <Link to={`produto/${prod.id}`} className='produto'>
            <img src={prod.foto} alt={prod.nome} />
            <h2 className='nome'>{prod.nome}</h2>
            <p className='desc'>{prod.descricao}</p>
            <h3 className='preco'><FaCoins/> R$ {prod.preco}</h3>
        </Link>
    )
}

export default Produto
