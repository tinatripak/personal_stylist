import React, { useState } from 'react'
import i18next from 'i18next'
import { PiGlobeHemisphereEastLight } from 'react-icons/pi'
import styles from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

interface Language {
  code: string
  name: string
  country_code: string
  dir: string
}

const LanguageSwitcher: React.FC = () => {
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
  const { i18n } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language
  )

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(i18n.language)
    i18next.changeLanguage(code)
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        <PiGlobeHemisphereEastLight />
      </button>
      <ul className={styles.dropdownContent}>
        {languages.map(({ code, name, country_code }) => (
          <li
            key={country_code}
            value={country_code}
            className={selectedLanguage === code ? styles.selected : ''}
          >
            <a onClick={() => handleLanguageChange(code)}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageSwitcher
