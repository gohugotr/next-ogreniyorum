import React from 'react'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <h1>Hepsi Layoutla sarılmış</h1>
            {children}
        </main>

    </div>
  )
}

export default Layout