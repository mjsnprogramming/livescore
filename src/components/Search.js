
import '../styles/Search.scss';

import CartVector from '../images/CartVector.png';
import NotificationVector from '../images/NotificationVector.png';
import profileImage from '../../src/images/Ekstraklasa/LechPoznan.png';
import MenuVector from '../images/Menu.png';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import DashboardVector from '../../src/images/Dashboard.png';
import LiveVector from '../../src/images/Live.png';
import StandingsVector from '../../src/images/Standings.png';
import HighlightsVector from '../../src/images/Highlights.png';
import ShopVector from '../images/Shop.png';
import NewsVector from '../images/News.png';
import React from 'react';



function Search() {
    const openDashboard = () => {
        const searchingHomeImg = document.querySelector('#dashboardSearching');
        searchingHomeImg.style.display = "block";
    }
    const closeDashboard = () => {
        const searchingHomeImg = document.querySelector('#dashboardSearching');
        searchingHomeImg.style.display = "none";
    }
    return (
        <div className = "searching">
            <div id = "dashboardSearching">
                <span>MJSN LiveScore</span>
                <span>MENU</span>
                <img src = {DashboardVector} id = "dashboardVector"/>
                <li><Link to = "/" className = "links">Dashboard</Link></li>
                <img src = {LiveVector} id = "liveVector"/>
                <li><Link to = "/LiveGames">Live Football</Link></li>
                <img src = {StandingsVector} id = "standingsVector"/>
                <li><Link to = "/Standings/Standings">Standings</Link></li>
                <img src = {HighlightsVector} id = "highlightsVector"/>
                <li><Link to = "/Highlights">Highlights</Link></li>
                <img src = {ShopVector} id = "shopVector"/>
                <li><Link to = "/Shop">Shop</Link></li>
                <img src = {NewsVector} id = "newsVector"/>
                <li><Link to = "/News">News</Link></li>
                </div>
            <Link to = "/"><img src = {MenuVector} id = "searchingHomeImg" onClick = {openDashboard}></img></Link>
                <input type = "text" id = "searchInput" placeholder = "Type to search..."></input>
                    <div id = "accountSection">
                        <img src = {CartVector} id = "cartVector"/>
                        <img src = {NotificationVector} id = "notificationVector"/>
                        <div id = "account">
                            <img src = {profileImage} id = "profileImage"/>
                        </div>
                    </div>
        </div>
    )
}

export default Search;