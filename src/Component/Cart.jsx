import React from "react";
import "../CSS/Cart.css";
import { ArrowRightOutlined , PlusOutlined , MinusOutlined} from "@ant-design/icons";
import { Button } from 'antd';

export default function Cart({ cartItem, onAdd, onRemove }) {
  const totalPrice = cartItem.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <div>
      <div className="cart_main">
        <h1>Cart</h1>
        <h3>{cartItem.length} ITEM</h3>

        <div className="cart_products">
          {cartItem.length === 0 && <div>Cart Is Empty</div>}
          {cartItem.map((item) => (
            <div key={item.id} className="cart_item">
              <div className="item_name">{item.name}</div>
              <Button type="text" onClick={() => onRemove(item)}><MinusOutlined style={{color: 'red'}} /></Button>
              <Button type="text" onClick={() => onAdd(item)}><PlusOutlined style={{color: 'green'}} /></Button>

              <div className="col-2 text-right">
              <i class="fas fa-rupee-sign rupee" style={{paddingRight:"4px"}}></i>{item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div>
          {cartItem.length !== 0 && (
            <>
        
              <div className="Cart_total">

                  <strong>Sub Total</strong>
                  <strong><i class="fas fa-rupee-sign rupee"></i>{totalPrice.toFixed(2)}</strong>
            
              </div>
        
              <div className="checkout">
                <h4>Checkout<ArrowRightOutlined  style={{paddingLeft:"6px"}} /></h4>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
