import React from 'react';
import classes from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
  return (
    <div>
        <a href='./'><button type='button' className={classes.newsButton} autoFocus>Новини</button></a>
        <button type='button' className={classes.galleryButton}>Галерея</button>
        <button type='button' className={classes.historyButton}>Історія</button>
        <button type='button' className={classes.choirButton}>Хор</button>
        <button type='button' className={classes.communitiesButton}>Спільноти</button>
        <button type='button' className={classes.contactsButton}>Контакти</button>
        <button type='button' className={classes.mapButton}>Мапа</button>
        <div className={classes.socialNetworks}>
            <div className={classes.meanSoc}>
                <FontAwesomeIcon className={classes.icon} icon={faShareNodes}/>
                <div className={classes.socIcons}> 
                    <a href='/' className={classes.socMedias}><FontAwesomeIcon icon={faFacebook}/><br/></a>
                    <a href='/' className={classes.socMedias}><FontAwesomeIcon icon={faYoutube}/><br/></a>
                    <a href='/' className={classes.socMedias}><FontAwesomeIcon icon={faInstagram}/><br/></a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Menu;
