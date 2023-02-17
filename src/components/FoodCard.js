import React from "react";
import PortionButton from "./PortionButton.js"
import styles from "./FoodCard.module.css"

function FoodCard({price, name, handler, currentCount}) {
    return (
      <div className={styles.foodCard}>
        <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="foodImage" className={styles.foodImage} />
        <div className={styles.foodDescription}>
          <span className={styles.foodName}>{name}</span>
          <span className={styles.foodPrice}>{price}</span>
        </div>
        <div className={styles.portionButton}>
            <PortionButton name={name} handler={handler} currentCount={currentCount}/>
        </div>
      </div>
    );
}

export default FoodCard;
