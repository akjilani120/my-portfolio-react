import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const chanceColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", chanceColor);
  return (
    <div className={color ? "navbar-main navbar-main-color" : "navbar-main"}>
      <nav class="navbar navbar-expand-lg   w-100 px-3">
        <h5 class="brand-logo " href="/">
          Ak Jilani
        </h5>
        <button
          class="navbar-toggler nav-tog "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="menu-bar-icon fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                to="banner"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navigation-items-link"
              >
                Home{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navigation-items-link"
              >
                About{" "}
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navigation-items-link"
              >
                Skills{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="parent"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navigation-items-link text-white"
              >
                Service{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navigation-items-link"
              >
                PORTFOLIO{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="navigation-items-link"
              >
                Contact{" "}
              </Link>
            </li>
            <li class="nav-item resumi-list">
              <a
                class="resumi-item navigation-items-link"
                href="https://drive.google.com/file/d/1dWIs_e7iO_RRWuAl79NKWNTBcg2Fie9H/view?usp=sharing"
                target="blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
