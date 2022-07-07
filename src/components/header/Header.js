import { Link } from 'react-router-dom';
import '../../assets/css/Header.css';
import CartWidget from './cartWidget/CartWidget';

const Header = () => {
  return (
    <div className="header">
        <Link to ="/"><img className="logo" alt="Clip Brand logo"/></Link>
        <CartWidget />
    </div>
  )
}

export default Header