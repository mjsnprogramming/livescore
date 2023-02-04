
import '../styles/Search.scss';

import CartVector from '../images/CartVector.png';
import NotificationVector from '../images/NotificationVector.png';
import profileImage from '../../src/images/Ekstraklasa/LechPoznan.png';
import MenuVector from '../images/Menu.png';
import { Link } from 'react-router-dom';

function Search() {
    return (
        <div className = "searching">
            <Link to = "/"><img src = {MenuVector} id = "searchingHomeImg"></img></Link>
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