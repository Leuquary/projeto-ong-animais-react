import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.css'

export default function Layout() {
  const { pathname } = useLocation()
  const mainCheio = pathname !== '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main className={mainCheio ? `${styles.main} ${styles.main_cheio}` : styles.main}>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}
