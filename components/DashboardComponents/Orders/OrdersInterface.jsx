import React from 'react'
import styles from '../../../styles/Home.module.css'
const OrdersInterface = ({ordernum,orderamount,orderdate,orderstatus}) => {
  return (
    <div className={styles.order}>
              <div className={styles.orderdetail}>
                <p>Order no:&nbsp;</p>
                <h4>{ordernum}</h4>
              </div>
              <div className={styles.orderdetail}>
                <p>{orderamount} Images</p>
              </div>
              <div className={styles.orderdetail}>
                <p>{orderdate}</p>
              </div>
              <div className={styles.orderdetail}>
                <p>Status:&nbsp;</p>
                <span data-status={orderstatus}>{orderstatus}</span>
              </div>
            </div>
  )
}

export default OrdersInterface