import React from 'react'
import Header from './components/Header'
import './App.css'
import Produto from './components/Produto'
import {GlobalContext} from './CartContext'

function App() {
  const [produtos, setProdutos] = React.useState(null)
  const [categorias, setCategorias] = React.useState(null)
  const [carrinho, setCarrinho] = React.useState([])

  React.useEffect(() => {
    async function getProdutos() {
      const productList = await fetch('http://localhost:6060/produtos')
      const produtosJson = await productList.json();
      setProdutos(produtosJson)
      const categoryList = await fetch('http://localhost:6060/categorias')
      const categoriasJson = await categoryList.json();
      setCategorias(categoriasJson)
    }
    
    getProdutos()
  }, [])

  console.log(carrinho);

  return (
    <>
    <Header/>
    <GlobalContext>
      <main className="app">
        <section className='produtos'>
          {produtos && produtos.map(produto =>{
            return <Produto prod={produto} key={produto.id} carrinho={setCarrinho}/>
          })}
        </section>
      </main>
    </GlobalContext>
    </>
  );
}

export default App;
