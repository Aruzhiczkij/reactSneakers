import React from "react";
import AppContext from "../../context";

import styles from "./Info.module.scss";

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="d-flex align-center justify-center flex-column flex">
      <img className="mb-20" src={image} alt="cart-empty" />

      <div className={styles.title}>{title}</div>

      <div className={styles.description}>{description}</div>

      <button onClick={() => setCartOpened(false)} className="back">
        <div className="arrow d-flex align-center">
          <img src="/img/arrow-left.svg" alt="arrow-left" />
        </div>

        <div className={styles.text}>Вернуться назад</div>
      </button>
    </div>
  );
};

export default Info;
