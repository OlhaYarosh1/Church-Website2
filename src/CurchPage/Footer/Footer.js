import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <img className={classes.imgEparchy} src='img/Eparchy.png' alt=''/>
            <hr className={classes.addressUnderline}/>
            <hr className={classes.jurisdictionUnderline}/>
            <div className={classes.addressTitle}>
                Адреса:
            </div>
            <div className={classes.address}>
                вул. Дрогобицька, 12/a,<br/>м. Трускавець, Львівська область,<br/>82200 Україна
            </div>
            <div className={classes.jurisdictionTitle}>
                Юрисдикція:
            </div>
            <div className={classes.jurisdiction}>
                Львівська митрополія,<br/>Самбірсько-Дрогобицька єпархія
            </div>
            <div className={classes.phoneTitle}>
                Телефон та E-mail:
            </div>
            <div className={classes.phone}>
                (097) 502 1104,<br/>info@info
            </div>
        </div>
    )
}

export default Footer;
