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
    </ul>
  );
}
export default Navigation;
