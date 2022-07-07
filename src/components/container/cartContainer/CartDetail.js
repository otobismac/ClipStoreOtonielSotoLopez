import React from 'react'
import '../../../assets/css/Cart.css';

const CartDetail = () => {
  return (
    <>
      <div className='leyenda-desglose'>A continuación se muestra el desglose de tu pedido</div>
      <div className="cart-container">
        <div className='header-columns'>
          <div className="column" id="producto">
            Producto
          </div>
          <div className="column" id="precio">
            Precio
          </div>
          <div className="column" id="cantidad">
            Cantidad
          </div>
        </div>
      </div>
      <div className='summary'>
        <div className="desglose"> 
          <div id="subtotal">Subtotal</div>
          <div id="cantidad-subtotal">0</div>
          <div id="total">Total</div>
          <div id="cantidad-total">0</div>
        </div>
       <div id="boton-pago"><div id="boton">Pagar</div></div>
      </div>
    </>
  )
}

export default CartDetail