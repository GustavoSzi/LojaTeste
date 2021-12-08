import React from 'react'

export const Cartcontext = React.createContext()



export const GlobalContext = ({children}) => {
    const [cart, setCart] = React.useState({})

    const addToCart = (produto) => {
        setCart(old =>{
            let quantity = 0
            if(old[produto.id]){
                quantity = old[produto.id].quantity
            }

            const novoCart = {
                ...old,
                [produto.id]:{
                    quantity: quantity+1,
                    ...produto
                }
            }
            
            window.localStorage.setItem('cart', JSON.stringify(novoCart))
            return novoCart
        })

    
    }

    return (
    <Cartcontext.Provider value={{cart, addToCart}}>
        {children}
    </Cartcontext.Provider>)
} 
