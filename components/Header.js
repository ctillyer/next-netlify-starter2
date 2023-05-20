import styles from './Header.module.css'
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./NavItems";


const MENU_LIST = [
  { text: "shini", href: "/" },
  { text: "peep", href: "/peep" },
  { text: "capoxxo", href: "/capoxxo" },
];

const Header = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <header className={styles.header}>
          <img src="/doves.svg" alt="Netlify Logo" className={styles.logo} />
            <Link href={"/"}>
              <a>
                <h1>tillyer.org</h1>
              </a>
            </Link>
            <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
             >
        </div>
        <div className={styles.nav__item}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItems active={activeIdx === idx} {...menu} />
            </div>
          ))}
          </div>
      </header>
    </>
  )
}

export default Header;
