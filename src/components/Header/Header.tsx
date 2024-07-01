import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import styles from './Header.module.scss'

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
    <header className={styles.header}>
      <div className={styles.content}>
        <Link
          to="/"
          className={styles.logo}
          onClick={() => {
            menuToggleHandler()
            if (location.pathname === '/') {
              setMenuOpen(false)
            }
          }}
        >
          Liza Balizka
        </Link>
        <div className={styles.menucontent}>
          <nav
            className={`${styles.nav} ${
              menuOpen && size.width && size.width < 1290
                ? styles.isMenu
                : styles.withoutMenu
            }`}
          >
            <ul>
              <li className={location.pathname === '/' ? styles.active : ''}>
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
                  location.pathname === '/services' ? styles.active : ''
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
                className={location.pathname === '/values' ? styles.active : ''}
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
                  location.pathname === '/products' ? styles.active : ''
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
            </ul>
          </nav>
          <div className={styles.menuLanguage}>
            <div className={styles.toggle}>
              {!menuOpen ? (
                <BiMenuAltRight onClick={menuToggleHandler} />
              ) : (
                <AiOutlineClose
                  onClick={menuToggleHandler}
                  className={styles.close}
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
