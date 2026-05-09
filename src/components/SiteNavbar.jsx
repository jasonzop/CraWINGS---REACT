import { useState } from "react";
import { Link } from "react-router-dom";

export default function SiteNavbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar custom-navbar">
      <div className="container-fluid px-4">
        <Link className="navbar-brand brand-logo" to="/" onClick={closeMenu}>
          CraWings
        </Link>

        <button
          className="hamburger-btn"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links-row ${menuOpen ? "mobile-open" : ""}`}>
          <Link className="nav-link custom-nav-link" to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className="nav-link custom-nav-link" to="/menu" onClick={closeMenu}>
            Menu
          </Link>
          <Link className="nav-link custom-nav-link" to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className="nav-link custom-nav-link" to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link className="nav-link custom-nav-link" to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
          <Link className="nav-link custom-nav-link" to="/cart" onClick={closeMenu}>
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}