import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import cartElements from "./cartElements";
import CartTotal from "./CartTotal";

import "./CartContent.css";

const CartContent = () => {
    const { cart } = useContext(dataContext);

    return cart.length > 0 ?(
  <>
    <cartElements/>
    <CartTotal/>
  </>
  ): (
    <h2 className='cart-message-center'>Tu carrito esta vacio</h2>
  );
};

export default CartContent