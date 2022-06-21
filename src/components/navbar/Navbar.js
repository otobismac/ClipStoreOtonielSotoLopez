import '../../assets/css/Navbar.css';

const Navbar = ({categories}) => {
  return (
    <div className="navbar">
      {
        categories.map( (value, index) => {
          return <div className="category" key={index}>{value}</div>
        })
      }
    </div>
  )
}

export default Navbar