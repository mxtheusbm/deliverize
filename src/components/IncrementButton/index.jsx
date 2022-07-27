import { Plus, Minus } from "phosphor-react"
import { useState } from "react"
import "./style.css"

export function IncrementButton() {
  const [number, setNumber] = useState(0);
  
  return (
    <div className="increment-button">
        <span className="minus" onClick={() => {number <= 0 ? setNumber(0) : setNumber(number - 1)}}>
            <Minus size={14} weight={"bold"} color="#aeb6c1"/>
        </span>

        <span className="number">
          { number }
        </span>

        <span className="plus" onClick={() => setNumber(number + 1)}>
          <Plus size={14} weight={"bold"} color="#ed3237"/>
        </span>
      </div>
  )
}