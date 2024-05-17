import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import classes from './Header.module.scss'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

interface Size {
  width: number | undefined
  height: number | undefined
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width > 1290) {
        setMenuOpen(false)
      }
    }
  }, [size.width])

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Link
          to="/"
          className={classes.logo}
          onClick={() => {
            menuToggleHandler()
            if (location.pathname === '/') {
              setMenuOpen(false)
            }
          }}
        >
          Liza Balizka
        </Link>
        <div className={classes.menucontent}>
          <nav
            className={`${classes.nav} ${
              menuOpen && size.width && size.width < 1290
                ? classes.isMenu
                : classes.withoutMenu
            }`}
          >
            <ul>
              <li className={location.pathname === '/' ? classes.active : ''}>
                <Link
                  to="/"
                  onClick={() => {
                    menuToggleHandler()
                    if (location.pathname === '/') {
                      setMenuOpen(false)
                    }
                  }}
                >
                  {t('header_about')}
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/values' ? classes.active : ''
                }
              >
                <Link
                  to="/values"
                  onClick={() => {
                    menuToggleHandler()
                    if (location.pathname === '/values') {
                      setMenuOpen(false)
                    }
                  }}
                >
                  {t('header_values')}
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/services' ? classes.active : ''
                }
              >
                <Link
                  to="/services"
                  onClick={() => {
                    menuToggleHandler()
                    if (location.pathname === '/services') {
                      setMenuOpen(false)
                    }
                  }}
                >
                  {t('header_services')}
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/products' ? classes.active : ''
                }
              >
                <Link
                  to="/products"
                  onClick={() => {
                    menuToggleHandler()
                    if (location.pathname === '/products') {
                      setMenuOpen(false)
                    }
                  }}
                >
                  {t('header_products')}
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/reviews' ? classes.active : ''
                }
              >
                <Link
                  to="/reviews"
                  onClick={() => {
                    menuToggleHandler()
                    if (location.pathname === '/reviews') {
                      setMenuOpen(false)
                    }
                  }}
                >
                  {t('header_reviews')}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={classes.menuLanguage}>
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
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
