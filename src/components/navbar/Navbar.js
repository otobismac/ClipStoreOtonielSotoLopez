import { NavLink } from 'react-router-dom';
import '../../assets/css/Navbar.css';

const Navbar = ({categories}) => {
  return (
    <div className="navbar">
      {
        categories.map( (element, index) => {
          return <NavLink to={`/${element.path}`} className="category" key={index}>
                  {element.category} 
                </NavLink>
        })
      }
    </div>
  )
}

export default Navbar