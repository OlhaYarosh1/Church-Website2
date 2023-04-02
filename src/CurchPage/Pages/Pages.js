import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NewsPage from './NewsPage/NewsPage';

const Pages = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<NewsPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default Pages;
