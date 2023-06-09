import { NavLink } from 'react-router-dom';
import './Nav.module.css'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" end>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" end>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/painting-preview" end>
            Paintings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
