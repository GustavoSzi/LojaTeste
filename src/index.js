import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import FullProduto from './components/FullProduto'
import Carrinho from './components/Carrinho'
import {GlobalContext} from './CartContext'

ReactDOM.render(
  <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='carrinho' element={<Carrinho />} />
          <Route path='produto/:productId' element={<FullProduto/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalContext>,
  document.getElementById('root')
);
