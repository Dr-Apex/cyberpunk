import React from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header({theme, setTheme}) {
  return (
    <div className={styles.header}>
      <div style={{cursor: 'pointer'}}>
        <Image
          priority
          src="/header/cryptopunk-logo.png"
          height={60}
          width={170}
          alt='punkLogo'
        />
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <Image
            priority
            src="/header/search.png"
            height={25}
            width={25}
            alt='searchIcon'
          />
        </div>
        <input 
          className={styles.searchInput} 
          placeholder='Collection, item or user...' 
        />
      </div>

      <div className={styles.headerItems}>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className={styles.headerActions}>
        <div className={styles.themeSwitch} onClick={() => setTheme(!theme)}>
          {theme ? (
            <Image
              priority
              src="/header/lightMode.png"
              height={25}
              width={25}
              alt='lightMode'
            />
          ) : (
            <Image
              priority
              src="/header/darkMode.png"
              height={25}
              width={25}
              alt='darkMode'
            />
          )}
        </div>
      </div>

      <div className={styles.loginButton}>GET IN</div>
    </div>
  )
}
