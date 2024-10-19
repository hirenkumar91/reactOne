"use client"
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Navitem from './navItem';
import data from '@/data/galectica.json';


export const Navbar = () => {
  const currentPath = usePathname()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/"><img src="/shared/logo.svg" alt="" /> GALACTICA</a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {
            data.navbarItems.map((navItem, index) => {
              const isActive = navItem.link === currentPath;
              return (
                <Navitem
                  key={index}
                  title={navItem.title}
                  link={navItem.link}
                  isActive={isActive}
                />
              )
            }
            )
          }
        </ul>
      </nav>
    </header>
  );
}