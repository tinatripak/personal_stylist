import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

import classes from "./Header.module.scss";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width > 1290) {
        setMenuOpen(false);
      }
    }
  }, [size.width]);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Link
          to="/"
          className={classes.logo}
          onClick={() => {
            menuToggleHandler();
            if (location.pathname === "/") {
              setMenuOpen(false);
            }
          }}
        >
          Liza Balizka
        </Link>
        <nav
          className={`${classes.nav} ${
            menuOpen && size.width && size.width < 1290
              ? classes.isMenu
              : classes.withoutMenu
          }`}
        >
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  menuToggleHandler();
                  if (location.pathname === "/") {
                    setMenuOpen(false);
                  }
                }}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/values"
                onClick={() => {
                  menuToggleHandler();
                  if (location.pathname === "/values") {
                    setMenuOpen(false);
                  }
                }}
              >
                Values
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => {
                  menuToggleHandler();
                  if (location.pathname === "/services") {
                    setMenuOpen(false);
                  }
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                onClick={() => {
                  menuToggleHandler();
                  if (location.pathname === "/reviews") {
                    setMenuOpen(false);
                  }
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose
              onClick={menuToggleHandler}
              className={classes.close}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
