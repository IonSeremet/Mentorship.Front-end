import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header-right">
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
            </form>
          </div>

          <Link to="/">Home</Link>
          <Link to="/products">Products </Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
