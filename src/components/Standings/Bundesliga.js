import '../../styles/Bundesliga.scss';
import '../../styles/Tables.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation.js';
import Search from '../Search';

import Germany from '../../images/Germany.png';
import BundesligaImage from '../../images/Bundesliga.png';
import Bayern from '../../images/Bundesliga/Bayern.png';
import Freiburg from '../../images/Bundesliga/Freiburg.png';
import Leipzig from '../../images/Bundesliga/Leipzig.png';
import Eintracht from '../../images/Bundesliga/Eintracht.png';
import Union from '../../images/Bundesliga/Union.png';
import BorussiaDortmund from '../../images/Bundesliga/BorussiaDortmund.png';
import Wolfsburg from '../../images/Bundesliga/Wolfsburg.png';
import BorussiaMoenchengladbach from '../../images/Bundesliga/BorussiaMoenchengladbach.png';
import Werder from '../../images/Bundesliga/Werder.png';
import Mainz from '../../images/Bundesliga/Mainz.png';
import Hoffenheim from '../../images/Bundesliga/Hoffenheim.png';
import BayerLeverkusen from '../../images/Bundesliga/BayerLeverkusen.png';
import Koeln from '../../images/Bundesliga/Koeln.png';
import Augsburg from '../../images/Bundesliga/Augsburg.png';
import Hertha from '../../images/Bundesliga/Hertha.png';
import Stuttgart from '../../images/Bundesliga/Stuttgart.png';
import Bochum from '../../images/Bundesliga/Bochum.png';
import Schalke from '../../images/Bundesliga/Schalke.png';

function Bundesliga() {
    return(
        <div className = "Bundesliga">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
            <Navigation/>
            <Search/>

            <div id = "tableBundesliga">
                <img src = {Germany} id = "germanyTableImage"/>
                <img src = {BundesligaImage} id = "bundesligaTableImage"/>
                <span id = "bundesligaTableSpan">Bundesliga</span>

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

                        <div className = "tableStandings" id = "firstPlace">
                            <span>1</span>
                            <img src = {Bayern}/>
                            <li><Link to = "/Bundesliga/Clubs/Bayern">Bayern</Link></li>
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

                        <div className = "tableStandings" id = "secondPlace">
                            <span>2</span>
                            <img src = {Freiburg}/>
                            <li><Link to = "/Bundesliga/Clubs/Freiburg">Freiburg</Link></li>
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
                        <div className = "tableStandings" id = "thirdPlace">
                            <span>3</span>
                            <img src = {Leipzig}/>
                            <li><Link to = "/Bundesliga/Clubs/Leipzig">RB Leipzig</Link></li>
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
                        <div className = "tableStandings" id = "fourthPlace">
                            <span>4</span>
                            <img src = {Eintracht}/>
                            <li><Link to = "/Bundesliga/Clubs/Eintracht">Eintracht</Link></li>
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

                        <div className = "tableStandings" id = "fifthPlace">
                            <span>5</span>
                            <img src = {Union}/>
                            <li><Link to = "/Bundesliga/Clubs/Union">Union</Link></li>
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
                            <img src = {BorussiaDortmund}/>
                            <li><Link to = "/Bundesliga/Clubs/BorussiaDortmund">Borussia Dortmund</Link></li>
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
                            <img src = {Wolfsburg}/>
                            <li><Link to = "/Bundesliga/Clubs/Wolfsburg">Wolfsburg</Link></li>
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
                            <img src = {BorussiaMoenchengladbach}/>
                            <li><Link to = "/Bundesliga/Clubs/BorussiaMoenchengladbach">Borussia Moenchengladbach</Link></li>
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
                            <img src = {Werder}/>
                            <li><Link to = "/Bundesliga/Clubs/Werder">Werder</Link></li>
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
                            <img src = {Mainz}/>
                            <li><Link to = "/Bundesliga/Clubs/Mainz">Mainz</Link></li>
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
                            <img src = {Hoffenheim}/>
                            <li><Link to = "/Bundesliga/Clubs/Hoffenheim">Hoffenheim</Link></li>
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
                            <img src = {BayerLeverkusen}/>
                            <li><Link to = "/Bundesliga/Clubs/BayerLeverkusen">Bayer Leverkusen</Link></li>
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
                            <img src = {Koeln}/>
                            <li><Link to = "/Bundesliga/Clubs/Koeln">Koeln</Link></li>
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
                            <img src = {Augsburg}/>
                            <li><Link to = "/Bundesliga/Clubs/Augsburg">Augsburg</Link></li>
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
                            <img src = {Hertha}/>
                            <li><Link to = "/Bundesliga/Clubs/Hertha">Hertha</Link></li>
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
                            <span>16</span>
                            <img src = {Stuttgart}/>
                            <li><Link to = "/Bundesliga/Clubs/Stuttgart">Stuttgart</Link></li>
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
                            <span>17</span>
                            <img src = {Bochum}/>
                            <li><Link to = "/Bundesliga/Clubs/Bochum">Bochum</Link></li>
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

                        <div className = "tableStandings" id = "firstRelegate">
                            <span>18</span>
                            <img src = {Schalke}/>
                            <li><Link to = "/Bundesliga/Clubs/Schalke">Schalke</Link></li>
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
                            <span>Champions League</span>
                        </div>

                        <div id = "europaLeagueAdvance">
                            <div id = "europaLeagueAdvanceColor"></div>
                            <span>Europa League</span>
                        </div>

                        <div id = "relegations">
                            <div id = "relegationsColor"></div>
                            <span>Relegations - 2 Bundesliga</span>
                        </div>
                </div>
            </div>
    ) 
}
export default Bundesliga;