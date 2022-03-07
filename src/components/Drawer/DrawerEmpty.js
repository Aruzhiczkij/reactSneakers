import React from "react";

import styles from "./DrawerEmpty.module.scss";

const DrawerEmpty = ({onClose}) => {
  return (
    <div className="d-flex align-center justify-center flex-column flex">
      <img className="mb-20" src="/img/cart-empty.svg" alt="cart-empty" />

      <div className={styles.title}>Корзина пустая</div>

      <div className={styles.description}>
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </div>

      <button onClick={onClose} className="back">
        <div className="arrow d-flex align-center">
          <img src="/img/arrow-left.svg" alt="arrow-left" />
        </div>

        <div className={styles.text}>Вернуться назад</div>
      </button>
    </div>
  );
};

export default DrawerEmpty;
