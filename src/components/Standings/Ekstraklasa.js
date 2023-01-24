import '../../styles/Ekstraklasa.scss';
import '../../styles/Tables.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Search from '../Search';

import Poland from '../../images/Poland.png';
import EkstraklasaImage from '../../images/Ekstraklasa.png';
import Rakow from '../../images/Ekstraklasa/Rakow.png';
import Legia from '../../images/Ekstraklasa/Legia.png';
import Widzew from '../../images/Ekstraklasa/Widzew.png';
import Pogon from '../../images/Ekstraklasa/Pogon.png';
import WislaPlock from '../../images/Ekstraklasa/WislaPlock.png';
import LechPoznan from '../../images/Ekstraklasa/LechPoznan.png';
import StalMielec from '../../images/Ekstraklasa/StalMielec.png';
import Cracovia from '../../images/Ekstraklasa/Cracovia.png';
import Warta from '../../images/Ekstraklasa/Warta.png';
import Radomiak from '../../images/Ekstraklasa/Radomiak.png';
import Slask from '../../images/Ekstraklasa/Slask.png';
import Gornik from '../../images/Ekstraklasa/Gornik.png';
import Jagiellonia from '../../images/Ekstraklasa/Jagiellonia.png';
import Lechia from '../../images/Ekstraklasa/Lechia.png';
import Zaglebie from '../../images/Ekstraklasa/Zaglebie.png';
import Piast from '../../images/Ekstraklasa/Piast.png';
import Korona from '../../images/Ekstraklasa/Korona.png';
import Miedz from '../../images/Ekstraklasa/Miedz.png';


function Ekstraklasa() {
    return (
        <div className = "Ekstraklasa">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
            <Navigation/>
            <Search/>

            <div id = "tableEkstraklasa">
                <img src = {Poland} id = "polandTableImage"/>
                <img src = {EkstraklasaImage} id = "ekstraklasaTableImage"/>
                <span id = "ekstraklasaTableSpan">Ekstraklasa</span>

                        <div id = "caption">
                            <span>Club</span>
                            <span>M</span>
                            <span>W</span>
                            <span>D</span>
                            <span>L</span>
                            <span>P</span>
                            <span>G</span>
                            <span>Form</span>
                        </div>

                        <div className = "tableStandings championsLeagueAdvance">
                            <span>1</span>
                            <img src = {Rakow}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Rakow">Raków Częstochowa</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings europaLeagueAdvance">
                            <span>2</span>
                            <img src = {Legia}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Legia">Legia Warszawa</Link></li>
                            <span>17</span>
                            <span>12</span>
                            <span>3</span>
                            <span>2</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings europaLeagueAdvance">
                            <span>3</span>
                            <img src = {Widzew}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Widzew">Widzew Łódź</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings">
                            <span>4</span>
                            <img src = {Pogon}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Pogon">Pogoń Szczecin</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>5</span>
                            <img src = {WislaPlock}/>
                            <li><Link to = "/Ekstraklasa/Clubs/WislaPlock">Wisła Płock</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings">
                            <span>6</span>
                            <img src = {LechPoznan}/>
                            <li><Link to = "/Ekstraklasa/Clubs/LechPoznan">Lech Poznań</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>7</span>
                            <img src = {StalMielec}/>
                            <li><Link to = "/Ekstraklasa/Clubs/StalMielec">Stal Mielec</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>8</span>
                            <img src = {Cracovia}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Cracovia">Cracovia Kraków</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>9</span>
                            <img src = {Warta}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Warta">Warta Poznań</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>10</span>
                            <img src = {Radomiak}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Radomiak">Radomiak Radom</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>11</span>
                            <img src = {Slask}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Slask">Śląsk Wrocław</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>12</span>
                            <img src = {Gornik}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Gornik">Górnik Zabrze</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>13</span>
                            <img src = {Jagiellonia}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Jagiellonia">Jagiellonia Białystok</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>14</span>
                            <img src = {Lechia}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Lechia">Lechia Gdańsk</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>15</span>
                            <img src = {Zaglebie}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Zaglebie">Zagłębie Lubin</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>16</span>
                            <img src = {Piast}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Piast">Piast Gliwice</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>17</span>
                            <img src = {Korona}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Korona">Korona Kielce</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>18</span>
                            <img src = {Miedz}/>
                            <li><Link to = "/Ekstraklasa/Clubs/Miedz">Miedź Legnica</Link></li>
                            <span>17</span>
                            <span>14</span>
                            <span>2</span>
                            <span>1</span>
                            <span>40-14</span>
                            <span>44</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div id = "championsLeagueAdvance">
                            <div id = "championsLeagueAdvanceColor"></div>
                            <span>Champions League (Qualifying Round)</span>
                        </div>

                        <div id = "europaLeagueAdvance">
                            <div id = "europaLeagueAdvanceColor"></div>
                            <span>Europa League (Qualifying Round)</span>
                        </div>

                        <div id = "relegations">
                            <div id = "relegationsColor"></div>
                            <span>Relegations - 1 Liga</span>
                        </div>
                        </div>
        </div>
    )
}
export default Ekstraklasa;