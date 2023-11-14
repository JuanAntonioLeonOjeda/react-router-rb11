import { Link } from 'react-router-dom';

import './NavBar.css'

function NavBar() {
  return (
    <div className="nav-bar">
      <h3>Reboot Academy</h3>
      <section className='options'>
        <Link to="/">
          <div className="option">HOME</div>
        </Link>
        <Link to="/users">
          <div className="option">USERS</div>
        </Link>
      </section>
    </div>
  );
}

export default NavBar