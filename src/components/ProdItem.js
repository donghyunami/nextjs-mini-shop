import React from "react";
import { Button, Header } from "semantic-ui-react";
import styles from "./ProdItem.module.css";

function ProdItem({ item }) {
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}

export default ProdItem;
