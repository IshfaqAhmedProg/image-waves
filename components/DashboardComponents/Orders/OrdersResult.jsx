import React, { useEffect, useState } from "react";
import styles from "../../../styles/Modal.module.css";
import Divider from "../../Divider/Divider";
import Button from "../../Button/Button";
import { useOrderContext } from "../../../contexts/OrderContext";
import { formatBytes } from "../../../shared/Functions/formatBytes";
const OrdersResult = () => {
  const { images } = useOrderContext();
  console.log(images);
  const [invoice, setInvoice] = useState({});
  //TODO set price to come from Database
  const price = 20;
  // const Invoice = {
  //   OrderLength: 0,
  //   OrderSize: 0,
  //   ServiceAmount: 0,
  //   Service: ["servicename", 0, 0],
  //   TotalAmount: 0,
  // };
  useEffect(() => {
    const ordersize = 0;
    const service = [];
    images.forEach((element) => {
      service.push(element.service);
      ordersize = ordersize + element.size;
    });
    let countService = service.reduce(
      (cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt),
      {}
    );
    let pricetable = Object.entries(countService);
    let totalAmount = 0;
    pricetable.forEach((element) => {
      element.push(element[1] * price);
      totalAmount = totalAmount + element[2];
    });
    setInvoice({
      OrderLength: images.length,
      OrderSize: formatBytes(ordersize),
      PriceTable: pricetable,
      TotalAmount: totalAmount,
    });
  }, [images]);

  console.log("pricetable", invoice.PriceTable);
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
                      <td>{element[2]}$</td>
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
                <h4>{invoice.TotalAmount ? invoice.TotalAmount : 0} USD</h4>
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
