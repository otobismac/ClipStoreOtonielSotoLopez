import { Link } from "react-router-dom";
import "../../../assets/css/CartWidget.css";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className='cart-logo'><img className="cart" alt="Cart with added products to build"/></div>
    </Link>
  )
}

export default CartWidget