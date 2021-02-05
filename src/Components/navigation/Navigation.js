import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <ul>
      <li>
        <Link to="/">Jeopardy</Link>
      </li>
      <li>
        <Link to="/welcome/Dilasha!">Welcome</Link>
      </li>

      <li>
        <Link to="/clock">Clock</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
export default Navigation;
