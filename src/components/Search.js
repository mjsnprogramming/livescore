import Link from 'react-router-dom';
import '../styles/Search.scss';

import CartVector from '../images/CartVector.png';
import NotificationVector from '../images/NotificationVector.png';

function Search() {
    return (
        <div id = "searching">
                <input type = "text" id = "searchInput" placeholder = "Type to search..."></input>
                <img src = {CartVector} id = "cartVector"/>
                <img src = {NotificationVector} id = "notificationVector"/>
                <div id = "account"></div>
        </div>
    )
}

export default Search;