import React, { useEffect, useState } from "react";
import styles from "../../../styles/Modal.module.css";
import Divider from "../../Divider/Divider";
import Button from "../../Button/Button";
import { useOrderContext } from "../../../contexts/OrderContext";
import { formatPrice } from "../../../shared/Functions/formatPrice";
const OrdersResult = () => {
  const { invoice } = useOrderContext();
  console.log(invoice);
  return (<div className={styles.container}>

    <div className={styles.resultpanel}>
      <div className={styles.resultcard + " " + styles.outer}>
        <table>
          <thead>
            <tr>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>{invoice.OrderLength}</span> images
              </td>
              <td>
                <span>{invoice.OrderSize}</span>
                size
              </td>
            </tr>
          </tbody>
        </table>
        {invoice.PriceTable ? invoice.PriceTable.length : 0} Service&#40;s&#41;
        selected
      </div>
      <div className={styles.resultcard + " " + styles.outer}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {invoice.PriceTable
              ? invoice.PriceTable.map((element) => {
                  return (
                    <tr key={element[0]}>
                      <td>{element[0]}</td>
                      <td>{element[1]}</td>
                      <td>{formatPrice(element[2], false)}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className={styles.resultcard + " " + styles.outer}>
        <table>
          <tbody>
            <tr>
              <th>Total</th>
              <td>
                <h4>
                  {invoice.TotalAmount ? formatPrice(invoice.TotalAmount) : 0}
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.resultcard + " " + styles.outer}>
        <h4>Order Summary</h4>
        <table>
          <tbody>
            <tr>
              <td>Created:</td>
              <td>Sun, May 7, 2022</td>
            </tr>
            <tr>
              <td>Subtotal:</td>
              <td>
                {invoice.TotalAmount ? formatPrice(invoice.TotalAmount) : 0}
              </td>
            </tr>
            <tr>
              <td>Delivery by:</td>
              <td>Sun, May 14, 2022</td>
            </tr>
          </tbody>
        </table>
        <Divider direction="horizontal" />
        <Button disabled={invoice.OrderLength ? false : true} variant="primary">
          Confirm Order
        </Button>
      </div>
    </div>
  </div>

  );
};

export default OrdersResult;
