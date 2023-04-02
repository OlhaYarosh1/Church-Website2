import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChoirPage from './ChoirPage/ChoirPage';
import CommunitiesPage from './CommunitiesPage/CommunitiesPage';
import ContactsPage from './ContactsPage/ContactsPage';
import GalleryPage from './GalleryPage/GalleryPage';
import HistoryPage from './HistoryPage/HistoryPage';
import MapPage from './MapPage/MapPage';
import NewsPage from './NewsPage/NewsPage';

const Pages = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<NewsPage/>}/>
                    <Route path='/Gallery' element={<GalleryPage/>}/>
                    <Route path='/History' element={<HistoryPage/>}/>
                    <Route path='/Choir' element={<ChoirPage/>}/>
                    <Route path='/Communities' element={<CommunitiesPage/>}/>
                    <Route path='/Contacts' element={<ContactsPage/>}/>
                    <Route path='/Map' element={<MapPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default Pages;
