import React, {useState} from "react";
import styles from "./FoodCard.module.css"

function PortionButton() {
    const [ count, setCount ] = useState(0);

    function GetHandler(operator) {
        if (operator === "-") return () => { if (count > 0) setCount(count-1); }
        else if (operator === "+") return () => { setCount(count+1); }
    }

    if (count === 0) {
        return (
          <button className={styles.addButton} onClick={GetHandler('+')}>Add</button>
        )
    } else {
        return (
            <>
              <button className={styles.minus} onClick={GetHandler('-')}>-</button>
              <div className={styles.quantity}>{count}</div>
              <button className={styles.plus} onClick={GetHandler('+')}>+</button>
            </>
        )
    }
}

export default PortionButton;
