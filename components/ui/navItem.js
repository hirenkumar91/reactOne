"use client"

import styles from './Navbar.module.css';
import classNames from 'classnames';
import Link from 'next/link'


export const Navitem = ({ title, link, isActive }) => {

    return (
        <li className={classNames(styles.navbarLinks, { [styles.isLinkActive]: isActive })}>
            <Link href={link} className={styles.navbarLinks}><b>{title}</b></Link>
        </li>
    );
};

export default Navitem;