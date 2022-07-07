import '../../../assets/css/ItemDetailContainer.css';
import ItemDetail from "./itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  return (
    <div className="product-container"> 
      <div className="detail-container">
        <ItemDetail />
      </div>
    </div>
  )
}

export default ItemDetailContainer