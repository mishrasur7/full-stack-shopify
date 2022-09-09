import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StoreIcon from '@mui/icons-material/Store';

function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.3em",
  };
  return (
    <div className="main_nav">
      <div className="navbar_home_products">
        <Link to="" style={linkStyle}>
          <StoreIcon />
        </Link>
        <Link to="/" style={linkStyle}>
          Products
        </Link>
      </div>
      <div className="navbar_login_cart_theme">
        <Link to="/sign-in" style={linkStyle}>
          Login
        </Link>
        <Link to="/cart" style={linkStyle}>
          <AddShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;