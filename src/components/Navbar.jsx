import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/profile"> Profile </NavLink>
      {props.children}
    </nav>
  );
}

export default Navbar;
