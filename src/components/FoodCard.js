import React from "react";
import PortionButton from "./PortionButton.js"
import styles from "./FoodCard.module.css"

function FoodCard({m, handler, currentCount}) {
    return (
      <div className={styles.foodCard}>
        <img src={m.img}
        alt="foodImage" className={styles.foodImage} />
        <div className={styles.foodDescription}>
          <span className={styles.foodName}>{m.name}</span>
          <span className={styles.foodPrice}>{`${m.price} Rs`}</span>
        </div>
        <div className={styles.portionButton}>
            <PortionButton name={m.name} handler={handler} currentCount={currentCount}/>
        </div>
      </div>
    );
}

export default FoodCard;
