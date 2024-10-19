"use client";

import styles from '@/components/destination/destination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialmediaItem = ({ url, title, icon }) => {

    return (
        <li className={styles.footerList}>
            <FontAwesomeIcon icon={icon} size="lg"/>
            <a href={url} target="_blank" style={{padding:"1rem"}}>{title}</a>
        </li>);


};

export default SocialmediaItem;