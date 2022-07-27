import Logo from '../../assets/logo.png'
import { Drawer } from '../Drawer';
import { CaretDown, CaretLeft, MagnifyingGlass, ShoppingCart, UserCircle } from 'phosphor-react'
import { useState } from 'react';

import "./style.css"


export function Header() {
  const [isActive, setIsActive] = useState(false)
  
  const ToggleMode = () => {
    setIsActive(!isActive);
  };
  
  
  return (
    <header>
      <div className="wrapper">
        <a href="#" className='caret-left'>
          <CaretLeft size={24} color='#4e4e4e' />
        </a>
      
        <a href="#" className='logo'>
          <img src={Logo} alt="Logo" />
        </a>

        <div className="desktop-header">
          <button className="address-button">
            Escolha o endereço

            <CaretDown color='#ed3237'/>
          </button>

          <form action="" className='input-search-field'>
            <input 
              type="text"
              placeholder='Busque por estabelecimento ou produtos' 
              className="input-search" 
            />
            
            <MagnifyingGlass color='#ed3237' className='icon-search' />
          </form>

          <a href="#" className="login-button">
            <UserCircle size={24} />
            Entrar
          </a>

          <button 
            className="shopping-cart-button"
            onClick={ToggleMode}
          >
            <ShoppingCart size={24} />
            Carrinho
          </button> 

          {isActive && <Drawer active={setIsActive} />}     
        </div>
      </div> 
    </header>
  )
}