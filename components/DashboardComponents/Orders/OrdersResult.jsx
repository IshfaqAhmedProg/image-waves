import React from "react";
import styles from "../../../styles/Modal.module.css";
import Divider from "../../Divider/Divider";
import Button from "../../Button/Button";
import { useOrderContext } from "../../../contexts/OrderContext";

const OrdersResult = () => {
  const { images } = useOrderContext();
  console.log(images);
  return (
    <>
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
                <span>{images.length}</span> images
              </td>
              <td>
                <span>
                  25.6<i>GB</i>
                </span>
                size
              </td>
            </tr>
          </tbody>
        </table>
        7 Service&#40;s&#41; selected
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
            <tr>
              <td>Clipping Path</td>
              <td>15</td>
              <td>50$</td>
            </tr>
            <tr>
              <td>Clipping Path</td>
              <td>15</td>
              <td>50$</td>
            </tr>
            <tr>
              <td>Clipping Path</td>
              <td>15</td>
              <td>50$</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.resultcard + " " + styles.outer}>
        <table>
          <tbody>
            <tr>
              <th>Total</th>
              <td>
                <h4>150 USD</h4>
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
              <td>Order Created:</td>
              <td>Sun, May 7, 2022</td>
            </tr>
            <tr>
              <td>Subtotal:</td>
              <td>150$</td>
            </tr>
            <tr>
              <td>Expected Delivery</td>
              <td>Sun, May 14, 2022</td>
            </tr>
          </tbody>
        </table>
        <Divider direction="horizontal" />
        <Button variant="primary">Confirm Order</Button>
      </div>
    </>
  );
};

export default OrdersResult;
