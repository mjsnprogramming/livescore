import '../../styles/SerieA.scss';
import '../../styles/Tables.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation.js';
import Search from '../Search';

import Italy from '../../images/Italy.png';
import SerieAImage from '../../images/SerieA.png';
import Napoli from '../../images/SerieA/Napoli.png';
import Milan from '../../images/SerieA/Milan.png';
import Juventus from '../../images/SerieA/Juventus.png';
import Inter from '../../images/SerieA/Inter.png';
import Lazio from '../../images/SerieA/Lazio.png';
import Atalanta from '../../images/SerieA/Atalanta.png';
import Roma from '../../images/SerieA/Roma.png';
import Udinese from '../../images/SerieA/Udinese.png';
import Torino from '../../images/SerieA/Torino.png';
import Fiorentina from '../../images/SerieA/Fiorentina.png';
import Bologna from '../../images/SerieA/Bologna.png';
import Empoli from '../../images/SerieA/Empoli.png';
import Monza from '../../images/SerieA/Monza.png';
import Lecce from '../../images/SerieA/Lecce.png';
import Spezia from '../../images/SerieA/Spezia.png';
import Salernitana from '../../images/SerieA/Salernitana.png';
import Sassuolo from '../../images/SerieA/Sassuolo.png';
import Verona from '../../images/SerieA/Verona.png';
import Sampdoria from '../../images/SerieA/Sampdoria.png';
import Cremonese from '../../images/SerieA/Cremonese.png';

function SerieA() {
    return(
        <div className = "SerieA">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
                <Navigation/>
                <Search/>

                <div id = "tableSerieA">
                    <img src = {Italy} id = "italyTableImage"/>
                    <img src = {SerieAImage} id = "serieATableImage"/>
                    <span id = "serieATableSpan">Serie A</span>
                

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
                            <img src = {Napoli}/>
                            <li><Link to = "/SerieA/Clubs/Napoli">Napoli</Link></li>
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

                        <div className = "tableStandings championsLeagueAdvance">
                            <span>2</span>
                            <img src = {Milan}/>
                            <li><Link to = "/SerieA/Clubs/Milan">Milan</Link></li>
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
                        <div className = "tableStandings championsLeagueAdvance">
                            <span>3</span>
                            <img src = {Juventus}/>
                            <li><Link to = "/SerieA/Clubs/Juventus">Juventus</Link></li>
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
                        <div className = "tableStandings championsLeagueAdvance">
                            <span>4</span>
                            <img src = {Inter}/>
                            <li><Link to = "/SerieA/Clubs/Inter">Inter</Link></li>
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
                            <span>5</span>
                            <img src = {Lazio}/>
                            <li><Link to = "/SerieA/Clubs/Lazio">Lazio</Link></li>
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
                            <span>6</span>
                            <img src = {Atalanta}/>
                            <li><Link to = "/SerieA/Clubs/Atalanta">Atalanta</Link></li>
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

                        <div className = "tableStandings conferenceLeagueAdvance">
                            <span>7</span>
                            <img src = {Roma}/>
                            <li><Link to = "/SerieA/Clubs/Roma">Roma</Link></li>
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
                            <img src = {Udinese}/>
                            <li><Link to = "/Udinese/Clubs/Udinese">Udinese</Link></li>
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
                            <img src = {Torino}/>
                            <li><Link to = "/SerieA/Clubs/Torino">Torino</Link></li>
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
                            <img src = {Fiorentina}/>
                            <li><Link to = "/SerieA/Clubs/Fiorentina">Fiorentina</Link></li>
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
                            <img src = {Bologna}/>
                            <li><Link to = "/SerieA/Clubs/Bologna">Bologna</Link></li>
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
                            <img src = {Empoli}/>
                            <li><Link to = "/SerieA/Clubs/Empoli">Empoli</Link></li>
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
                            <img src = {Monza}/>
                            <li><Link to = "/SerieA/Clubs/Monza">Monza</Link></li>
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
                            <img src = {Lecce}/>
                            <li><Link to = "/SerieA/Clubs/Lecce">Lecce</Link></li>
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
                            <img src = {Spezia}/>
                            <li><Link to = "/SerieA/Clubs/Spezia">Spezia</Link></li>
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
                            <img src = {Salernitana}/>
                            <li><Link to = "/SerieA/Clubs/Salernitana">Salernitana</Link></li>
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
                            <img src = {Sassuolo}/>
                            <li><Link to = "/SerieA/Clubs/Sassuolo">Sassuolo</Link></li>
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
                            <img src = {Verona}/>
                            <li><Link to = "/SerieA/Clubs/Verona">Verona</Link></li>
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
                            <span>19</span>
                            <img src = {Sampdoria}/>
                            <li><Link to = "/SerieA/Clubs/Sampdoria">Sampdoria</Link></li>
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
                            <span>20</span>
                            <img src = {Cremonese}/>
                            <li><Link to = "/SerieA/Clubs/Cremonese">Cremonese</Link></li>
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
                            <span>Relegations - Serie B</span>
                        </div>
                        </div>
        </div>

    )
}
export default SerieA;