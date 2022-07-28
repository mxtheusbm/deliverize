import Hamburguer from "../../assets/hamburguer.png"
import { useEffect, useState } from "react"
import { IncrementButton } from "../IncrementButton"

import "./style.css"


export function Product() {
  const [product, setProduct] = useState({
    id: Number,
    name: String,
    description: String,
    old_valor: Number,
    new_valor: Number

  })

  const [ingredient1, setIngredient1] = useState({
    id: Number,
    name: String,
    valor: String
  })

  const [ingredient2, setIngredient2] = useState({
    id: Number,
    name: String,
    valor: String
  })

  const [ingredient3, setIngredient3] = useState({
    id: Number,
    name: String,
    valor: String
  })

  const [ingredient4, setIngredient4] = useState({
    id: Number,
    name: String,
    valor: String
  })

  useEffect(() => {
    async function fetchProduct() {
      const productData = await fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
        .then(response => response.json());
      
      const product = await productData[0];

        setProduct({
          id: product.id,
          name: product.nm_product,
          description: product.description,
          old_valor: product.vl_price,
          new_valor: product.vl_discount
        });

        setIngredient1({
          id: product.ingredients[0].itens[0].id,
          name: product.ingredients[0].itens[0].nm_item,
          valor: product.ingredients[0].itens[0].vl_item
        })

        setIngredient2({
          id: product.ingredients[0].itens[1].id,
          name: product.ingredients[0].itens[1].nm_item,
          valor: product.ingredients[0].itens[1].vl_item
        })

        setIngredient3({
          id: product.ingredients[0].itens[2].id,
          name: product.ingredients[0].itens[2].nm_item,
          valor: product.ingredients[0].itens[2].vl_item
        })

        setIngredient4({
          id: product.ingredients[0].itens[3].id,
          name: product.ingredients[0].itens[3].nm_item,
          valor: product.ingredients[0].itens[3].vl_item
        })
    }
    
    fetchProduct();
  }, []);

  return (
    <main>
      <div className="wrapper">
          <div className="col-a">
            <div className="product-description">
              <div className="product-image">
                <img src={ Hamburguer } alt="" />
              </div>
            
                  
              <h1> { product.name } </h1>

              <p> { product.description } </p>

              <div className="product-price">
                <span className="new-price"> { product.new_valor } </span>
                <span className="old-price"> { product.old_valor } </span>
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
                <div className="ingredient">
                  <div className="ingredient-name">
                    <h2> { ingredient1.name } </h2>
                  </div>

                  <IncrementButton />

                  <div className="ingredient-price">
                    <span>+ R${ ingredient1.valor } </span>
                  </div>
                </div>

                <div className="divisor"></div>

                <div className="ingredient">
                  <div className="ingredient-name">
                    <h2> { ingredient2.name } </h2>
                  </div>

                  <IncrementButton />

                  <div className="ingredient-price">
                    <span>+ R${ ingredient2.valor }0 </span>
                  </div>
                </div>

                <div className="divisor"></div>

                <div className="ingredient">
                  <div className="ingredient-name">
                    <h2> { ingredient3.name } </h2>
                  </div>

                  <IncrementButton />

                  <div className="ingredient-price">
                    <span>+ R${ ingredient3.valor }0 </span>
                  </div>
                </div>
                
                <div className="divisor"></div>

                <div className="ingredient">
                  <div className="ingredient-name">
                    <h2> { ingredient4.name } </h2>
                  </div>

                  <IncrementButton />

                  <div className="ingredient-price">
                    <span>+ R${ ingredient4.valor }0 </span>
                  </div>
                </div>
                
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
          
                <button 
                  className="button"
                >
                  Adicionar
                </button>
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}