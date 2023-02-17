import React, {useState} from "react"
import styles from "./Checkout.module.css"
import Home from "./Home.js"

function Checkout({cart}) {
    let [ goToHome, setHome ] = useState(false);
    return (
        <div className={styles.cartView}>
            { goToHome && <Home/> }
        </div>
    );
}

export default Checkout;
