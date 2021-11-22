import React , {useState} from "react";
import "../CSS/Home.css";
import MenuItems from "./MenuItems";
import { Menuinfo } from "../data";
import Cart from "../Component/Cart";
import { Anchor } from "antd";


export default function Home() {

  const {Product} = Menuinfo;
  const [cartItem , setcartItem] = useState([])

  const onAdd = (Product) =>{
    const exist = cartItem.find((x) => x.id === Product.id);
    if (exist) {
      setcartItem(
        cartItem.map((x) =>
          x.id === Product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartItem([...cartItem, { ...Product, qty: 1 }]);
    }
  }

  const onRemove = (Product) => {
    const exist = cartItem.find((x) => x.id === Product.id);
    if (exist.qty === 1) {
      setcartItem(cartItem.filter((x) => x.id !== Product.id));
    } else {
      setcartItem(
        cartItem.map((x) =>
          x.id === Product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const { Link } = Anchor;
  
  return (
    <>
      <div className="home_main">
        <div className="home_wrapper">
          <div className="home_left">
            <Anchor className="Anchor">
              <Link className="Anchor_link" href="#" title="Pizza" />
              <Link className="Anchor_link" href="#" title="Veg Pizza" />
                <Link className="Anchor_link" href="#" title="Non Veg Pizza" />
                <Link className="Anchor_link" href="#" title="Pasta" />

                <Link className="Anchor_link" href="#" title="Appetizers / Starters" />
              <Link className="Anchor_link" href="#" title="Veg Pizza" />
                <Link className="Anchor_link" href="#" title="Non Veg Pizza" />
                <Link className="Anchor_link" href="#" title="Pasta" />
  
            </Anchor>
            ,
          </div>

          <div className="home_center">
            <h1>Pizza</h1>
            {Menuinfo.map((data) => (
              <MenuItems onAdd={onAdd} onRemove={onRemove} key={data.id} data={data} />
            ))}
          </div>

          <div className="home_right">
            <Cart onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} />
          </div>
        </div>
      </div>
    </>
  );
}
