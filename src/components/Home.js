import '../styles/Home.scss';
import MenuVector from '../images/Menu.png';
import FlameVector from '../images/Flame.png';
import CompassVector from '../images/Compass.png';
import CommentVector from '../images/Comment.png';
import FootballVector from '../images/Football.png';
import BasketballVector from '../images/Basketball.png';
import BillardsVector from '../images/Billards.png';
import TableTennisVector from '../images/TableTennis.png';
import CyclingVector from '../images/Cycling.png';
import InfoVector from '../images/Info.png';
import CommentaryVector from '../images/Commentary.png';

function Home() {
    return (
        <div className = "Home">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>

            <div id = "navbar">
                <img src = {MenuVector}/>
                <img src = {FlameVector} id = "flameVector"/>
                <img src = {CompassVector} id = "compassVector"/>
                <img src = {CommentVector} id = "commentVector"/>
                <hr id = "betweenVectors"></hr>
                <img src = {FootballVector} id = "footballVector"/>
                <img src = {BasketballVector} id = "basketballVector"/>
                <img src = {BillardsVector} id = "billardsVector"/>
                <img src = {TableTennisVector} id = "tableTennisVector"/>
                <img src = {CyclingVector} id = "cyclingVector"/>
                <img src = {InfoVector} id = "infoVector"/>
                <img src = {CommentaryVector} id = "commentaryVector"/>
            </div>

        </div>
    )
}
export default Home;