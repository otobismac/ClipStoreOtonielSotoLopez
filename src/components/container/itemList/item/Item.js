import '../../../../assets/css/Item.css';

const Item = ( {id, name, description, price, imagePath}) => {
  return (
      <div className="card" id={`card-${id}`} key={id}>
        <span className='item-name'>{name}</span>
        <img className='item-image' src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name}/>
        <div className='item-description'>
          <p>
            {description}
          </p>
        </div>
        <div className='item-price'>
          ${price} mxn    
          {/*ADD TO CART BUTTON TO BE IMPLEMENTED AS COMPONENT SOON*/}
          <div className='add-to-cart'>ADD TO CART</div>
        </div>
      </div>
  )
}

export default Item