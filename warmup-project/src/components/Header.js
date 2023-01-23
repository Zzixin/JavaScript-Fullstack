import "../styles/modal.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Header = ({ setIsShow }) => {
  const handleSignIn = () => {
    console.log("signIn");
    setIsShow(true);
  };
  return (
    <div id="header">
      <a id="header-logo" href="#default">
        ManagementChuwa
      </a>
      <input id="header-search" placeholder="Search" />
      <button id="header-signIn" onClick={handleSignIn}>
        Sign In
      </button>
      <Button variant="dark" id="header-cart">
        <AiOutlineShoppingCart />
      </Button>
      <p id="header-money">$0.00</p>
    </div>
  );
};

export default Header;
