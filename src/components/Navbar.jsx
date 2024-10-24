export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img src="public/images/brand_logo.png" alt="" />
      </div>
      <div className="navbar-items">
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-btn">
        <button>Login</button>
      </div>
    </nav>
  );
}
