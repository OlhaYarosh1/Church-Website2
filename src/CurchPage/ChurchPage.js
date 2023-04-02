import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Pages from './Pages/Pages';

const ChurchPage = () => {
    return (
        <div>
            <Header/>
            <Menu/>
            <Pages/>
            <Footer/>
        </div>
    )
}

export default ChurchPage;
