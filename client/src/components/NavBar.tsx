import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <div className="navbar"> 
            <div className="nav_logo">
              <Link to="/">SHOPIFY</Link>
            </div>
            <div className="nav_main">
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
            </div>
            <div className="nav_login_theme">
              <Link to="/login">Login</Link>
              <Link to="/theme">Theme</Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
