import { IncrementButton } from "../IncrementButton"
import "./style.css"

export function Ingredient() {
  return (
    <div className="ingredient">
      <div className="ingredient-name">
        <h2>Queijo cheddar</h2>
      </div>

      <IncrementButton />

      <div className="ingredient-price">
        <span>+ R$4,99</span>
      </div>
    </div>
  )
}