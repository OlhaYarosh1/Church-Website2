import React from 'react';
import classes from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
  return (
    <div>
        <a href='./'><button type='button' className={classes.newsButton}>Новини</button></a>
        <a href='./Gallery'><button type='button' className={classes.galleryButton}>Галерея</button></a>
        <a href='./History'><button type='button' className={classes.historyButton}>Історія</button></a>
        <a href='./Choir'><button type='button' className={classes.choirButton}>Хор</button></a>
        <a href='./Communities'><button type='button' className={classes.communitiesButton}>Спільноти</button></a>
        <a href='./Contacts'><button type='button' className={classes.contactsButton}>Контакти</button></a>
        <a href='./Map'><button type='button' className={classes.mapButton}>Мапа</button></a>
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
