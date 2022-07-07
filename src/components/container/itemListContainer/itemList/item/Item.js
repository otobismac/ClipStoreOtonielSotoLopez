import { Link } from 'react-router-dom';
import '../../../../../assets/css/Item.css';

const Item = ( {id, name, description, price, imagePath}) => {
  return (
      <div className="card" id={`card-${id}`} key={id}>
        <span className='item-name'>{name}</span>
        <img className='item-image' src={`${process.env.PUBLIC_URL}/../${imagePath}`} alt={name}/>
        <div className='item-description'>
          <p>
            {description}
          </p>
        </div>
        <div className='item-price'>
          <div>${price} mxn </div>   
          <Link to={`/products/${id}/detail`}><div className='add-to-cart-and-description'>Descripción</div></Link>
          <div className='add-to-cart-and-description'>Añadir a carrito</div>
        </div>
      </div>
  )
}

export default Item