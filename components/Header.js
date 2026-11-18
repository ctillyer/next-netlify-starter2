import styles from './Header.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [navActive, setNavActive] = useState(false)
  const navigation = useRef(null)
  const toggle = useRef(null)

  useEffect(() => {
    if (!navActive) return

    const onPointerDown = (event) => {
      if (!navigation.current?.contains(event.target)) setNavActive(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setNavActive(false)
        toggle.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [navActive])

  return (
    <header className={styles.header}>
      <img src="/doves.svg" alt="" className={styles.logo} />
      <Link href="/">
        <a><h1>tillyer | reyll.it</h1></a>
      </Link>
      <div className={styles.navigation} ref={navigation}>
        <button
          ref={toggle}
          type="button"
          className={styles.menuToggle}
          aria-label={navActive ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navActive}
          aria-controls="header-navigation"
          onClick={() => setNavActive(!navActive)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="header-navigation" aria-label="Main navigation" className={styles.menu} hidden={!navActive}>
          <Link href="/"><a onClick={() => setNavActive(false)}>home</a></Link>
          <Link href="/projects"><a onClick={() => setNavActive(false)}>projects</a></Link>
          <Link href="/thoughts"><a onClick={() => setNavActive(false)}>thoughts</a></Link>
          <Link href="/about"><a onClick={() => setNavActive(false)}>about</a></Link>
          <Link href="/contact"><a onClick={() => setNavActive(false)}>contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
