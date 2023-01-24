
import '../styles/Search.scss';

import CartVector from '../images/CartVector.png';
import NotificationVector from '../images/NotificationVector.png';
import profileImage from '../../src/images/Ekstraklasa/LechPoznan.png';

function Search() {
    return (
        <div className = "searching">
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