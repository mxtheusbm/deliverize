import Hamburguer from "../../assets/hamburguer.png"
import { IncrementButton } from "../IncrementButton"
import { Ingredient } from "../Ingredient"

import "./style.css"


export function Product() {
  return (
    <main>
      <div className="wrapper">
          <div className="col-a">
            <div className="product-description">
              <div className="product-image">
                <img src={Hamburguer} alt="" />
              </div>
            
                  
              <h1>Oferta picanha cheddar bacon</h1>

              <p >
                Delicioso hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim, acompanhamento e bebida.
              </p>

              <div className="product-price">
                <span className="new-price">R$31,99</span>
                <span className="old-price">R$34,95</span>
              </div>
            </div>
          </div>
          
          <div className="col-b">
            <div className="product-optional-items">
              <div className="add-items">
                <h2>Adicionar Ingredientes</h2>
                <p>Até 8 ingredientes.</p>
              </div>

              <div className="ingredients">
                <Ingredient />
                <div className="divisor"></div>

                <Ingredient />
                <div className="divisor"></div>

                <Ingredient />
                <div className="divisor"></div>

                <Ingredient />
                <div className="divisor"></div>
              </div>

            
              <div className="add-items">
                <h2>Precisa de Talher?</h2>
              </div>

              <form action="">
                <div className="radio-input-field">
                  <label className="label" htmlFor="radio-yes">Sim</label>
              
                  <input 
                    className="radio-input"
                    type="radio" 
                    name="yes" 
                    id="radio-yes" 
                  />
                </div>

                <br />
              
                <div className="radio-input-field">
                  <label className="label" htmlFor="radio-not">Não</label>
                
                  <input 
                    className="radio-input"
                    type="radio" 
                    name="not" 
                    id="radio-not" 
                  />
                </div>
              </form>

              <div className="add-order">
                <IncrementButton />

                <button className="button">Adicionar</button>
              </div>
            </div>
          </div>
      </div>
    </main>
  )
}