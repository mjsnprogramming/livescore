import '../../styles/Ligue1.scss';
import '../../styles/Tables.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation.js';
import Search from '../Search';


import France from '../../images/France.png';
import Ligue1Image from '../../images/Ligue1.png';
import PSG from '../../images/Ligue1/PSG.png';
import Lens from '../../images/Ligue1/Lens.png';
import Marseille from '../../images/Ligue1/Marseille.png';
import Monaco from '../../images/Ligue1/Monaco.png';
import Rennes from '../../images/Ligue1/Rennes.png';
import Lille from '../../images/Ligue1/Lille.png';
import Lorient from '../../images/Ligue1/Lorient.png';
import Clermont from '../../images/Ligue1/Clermont.png';
import Lyon from '../../images/Ligue1/Lyon.png';
import Nice from '../../images/Ligue1/Nice.png';
import Reims from '../../images/Ligue1/Reims.png';
import Toulouse from '../../images/Ligue1/Toulouse.png';
import Nantes from '../../images/Ligue1/Nantes.png';
import Troyes from '../../images/Ligue1/Troyes.png';
import Montpellier from '../../images/Ligue1/Montpellier.png';
import Strasbourg from '../../images/Ligue1/Strasbourg.png';
import Brest from '../../images/Ligue1/Brest.png';
import Ajaccio from '../../images/Ligue1/Ajaccio.png';
import Auxerre from '../../images/Ligue1/Auxerre.png';
import Angers from '../../images/Ligue1/Angers.png';

function Ligue1() {
    return (
        <div className = "Ligue1">
            <Navigation/>
            <Search/>

            <div id = "tableLigue1">
                <img src = {France} id = "franceTableImage"/>
                <img src = {Ligue1Image} id = "ligue1TableImage"/>
                <span id = "ligue1TableSpan">Ligue 1</span>
            

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
                            <img src = {PSG}/>
                            <li><Link to = "/Ligue1/Clubs/PSG">PSG</Link></li>
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
                            <img src = {Lens}/>
                            <li><Link to = "/Ligue1/Clubs/Lens">Lens</Link></li>
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
                        <div className = "tableStandings championsLeagueQualifying">
                            <span>3</span>
                            <img src = {Marseille}/>
                            <li><Link to = "/Ligue1/Clubs/Marseille">Marseille</Link></li>
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
                            <span>4</span>
                            <img src = {Monaco}/>
                            <li><Link to = "/Ligue1/Clubs/Monaco">Monaco</Link></li>
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
                            <span>5</span>
                            <img src = {Rennes}/>
                            <li><Link to = "/Ligue1/Clubs/Rennes">Rennes</Link></li>
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
                            <img src = {Lille}/>
                            <li><Link to = "/Ligue1/Clubs/Lille">Lille</Link></li>
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
                            <img src = {Lorient}/>
                            <li><Link to = "/Ligue1/Clubs/Lorient">Lorient</Link></li>
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
                            <img src = {Clermont}/>
                            <li><Link to = "/Ligue1/Clubs/Clermont">Clermont</Link></li>
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
                            <img src = {Lyon}/>
                            <li><Link to = "/Ligue1/Clubs/Lyon">Lyon</Link></li>
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
                            <img src = {Nice}/>
                            <li><Link to = "/Ligue1/Clubs/Nice">Nice</Link></li>
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
                            <img src = {Reims}/>
                            <li><Link to = "/Ligue1/Clubs/Reims">Reims</Link></li>
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
                            <img src = {Toulouse}/>
                            <li><Link to = "/Ligue1/Clubs/Toulouse">Toulouse</Link></li>
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
                            <img src = {Nantes}/>
                            <li><Link to = "/Ligue1/Clubs/Nantes">Nantes</Link></li>
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
                            <img src = {Troyes}/>
                            <li><Link to = "/Ligue1/Clubs/Troyes">Troyes</Link></li>
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
                            <img src = {Montpellier}/>
                            <li><Link to = "/Ligue1/Clubs/Montpellier">Montpellier</Link></li>
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
                            <img src = {Strasbourg}/>
                            <li><Link to = "/Ligue1/Clubs/Strasbourg">Strasbourg</Link></li>
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
                            <img src = {Brest}/>
                            <li><Link to = "/Ligue1/Clubs/Brest">Brest</Link></li>
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
                            <img src = {Ajaccio}/>
                            <li><Link to = "/Ligue1/Clubs/Ajaccio">Ajaccio</Link></li>
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
                            <img src = {Auxerre}/>
                            <li><Link to = "/Ligue1/Clubs/Auxerre">Auxerre</Link></li>
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
                            <img src = {Angers}/>
                            <li><Link to = "/Ligue1/Clubs/Angers">Angers</Link></li>
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

                        <div id = "championsLeagueQualifying">
                            <div id = "championsLeagueQualifyingColor"></div>
                            <span>Champions League(Qualifying Round)</span>
                        </div>

                        <div id = "europaLeagueAdvance">
                            <div id = "europaLeagueAdvanceColor"></div>
                            <span>Europa League</span>
                        </div>

                        <div id = "conferenceLeagueAdvance">
                            <div id = "conferenceLeagueAdvanceColor"></div>
                            <span>Conference League</span>
                        </div>

                        <div id = "relegations">
                            <div id = "relegationsColor"></div>
                            <span>Relegations - Ligue 2</span>
                        </div>
            </div>
        </div>
    )
}

export default Ligue1;