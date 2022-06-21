import '../../assets/css/Header.css';
import CartWidget from './cartWidget/CartWidget';

const Header = () => {
  return (
    <div className="header">
        <a href="http://localhost:3000/"><img className="logo" alt="Clip Brand logo"/></a>
        <CartWidget />
    </div>
  )
}

export default Header