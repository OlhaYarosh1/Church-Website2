import React from 'react';
import classes from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <div className={classes.menu}>
        <div className={classes.news}><div className={classes.mean}>Новини</div></div>
        <div className={classes.gallery}><div className={classes.mean}>Галерея</div></div>
        <div className={classes.history}><div className={classes.mean}>Історія</div></div>
        <div className={classes.choir}><div className={classes.mean}>Хор</div></div>
        <div className={classes.communities}><div className={classes.mean}>Спільноти</div></div>
        <div className={classes.contacts}><div className={classes.mean}>Контакти</div></div>
        <div className={classes.map}><div className={classes.mean}>Мапа</div></div>
        <div className={classes.socialNetworks}><div className={classes.meanSoc}><FontAwesomeIcon className={classes.icon} icon={faShareNodes}/></div></div>
    </div>
  )
}

export default Menu;
