import '../../../assets/css/ItemListContainer.css';
import ItemList from './itemList/ItemList';

const ItemListContainer = () => {
  return (
    <div className="main-products-container"> 
      <div className="item-list-container">
        <ItemList />
      </div>
    </div>
  )
}

export default ItemListContainer