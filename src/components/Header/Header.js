import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
  const user = {
    name: "john",
  };
  const cart = {
    totalCount: 10,
  };
  const logout = () => {};
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Food Mine!
        </Link>
        <nav>
          <ul>{
            user?(
            <li className="menu_container">
              <Link to="/profile" className="">
                {user.name}
              </Link>
              <div className="menu">
                <Link to="/profile">Profile</Link>
                <Link to="/orders">orders</Link>
                <a onClick={logout}>Logout</a>
              </div>
            </li>
            ):(<Link to="/login">Login</Link>
          )}
          <li>
            <Link to="/cart">
              cart
            {cart.totalCount > 0 && <span className="cart_count">{cart.totalCount}</span>}
            </Link>
          </li>
         </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
