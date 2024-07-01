import React, { useState, useEffect } from 'react'
import i18next from 'i18next'
import { PiGlobeHemisphereEastLight } from 'react-icons/pi'
import styles from './LanguageSwitcher.module.scss'
import Cookies from 'js-cookie'

interface Language {
  code: string
  name: string
  country_code: string
  dir: string
}

const languages: Language[] = [
  {
    code: 'ua',
    name: 'Ukrainian',
    country_code: 'ua',
    dir: 'rtl',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    dir: '',
  },
]

const LanguageSwitcher: React.FC = () => {
  const getLanguageCookie = (): string => {
    return Cookies.get('i18next') || 'ua'
  }

  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(getLanguageCookie())
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage)
  }, [selectedLanguage])

  const handleLanguageChange = (code: string) => {
    i18next.changeLanguage(code)
    setSelectedLanguage(code)
    Cookies.set('i18next', code)
    setDropdownVisible(false)
  }

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev)
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn} onClick={toggleDropdown}>
        <PiGlobeHemisphereEastLight />
      </button>
      {dropdownVisible && (
        <ul className={styles.dropdownContent}>
          {languages.map(({ code, name, country_code }) => (
            <li
              key={country_code}
              className={selectedLanguage === code ? styles.selected : ''}
            >
              <a onClick={() => handleLanguageChange(code)}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
