import { X } from "phosphor-react"
import Cart from '../../assets/shopping-cart.png'

import "./style.css"

export function Drawer( {active} ) {
  const closeDrawer = () => {
    active(false)
  }
  
  return (
    <div className="container">
      <span className="close-button">
        <X size={24} color={"#ed3237"} onClick={closeDrawer} />
      </span>

      <div className="cart-empty">
        <img src={Cart} alt="" />
      </div>
    </div>
  )
}