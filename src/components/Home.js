import React from "react";
import styles from "./Home.module.css";
import chefHat from "../assets/images/Bella Olonje logo 111 1.png";
import girlImage from "../assets/images/ToyFaces_Tansparent_BG_29.png";
import boyImage from "../assets/images/ToyFaces_Tansparent_BG_49.png";
function Home()
{
    return (
        <div>
        <h1 className={styles.heading}>Food For Everyone</h1>
        <img src={chefHat} alt="hat" className={styles.img} />
        </div>
    );
}

export default Home;