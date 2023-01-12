import Navigation from '../Navigation.js';
import Search from '../Search.js';
import England from '../../images/England.png';
import PremierLeagueImage from '../../images/PremierLeague.png';
import ArsenalLondon from '../../images/PremierLeague/ArsenalLondon.png';
import ManchesterCity from '../../images/PremierLeague/ManchesterCity.png';
import Newcastle from '../../images/PremierLeague/NewcastleUnited.png';
import ManchesterUtd from '../../images/PremierLeague/ManchesterUnited.png';
import Tottenham from '../../images/PremierLeague/TottenhamLondon.png';
import Liverpool from '../../images/PremierLeague/Liverpool.png';
import Fulham from '../../images/PremierLeague/FulhamLondon.png';
import Brighton from '../../images/PremierLeague/Brighton.png';

function PremierLeague() {
    return(
        <div className = "PremierLeague">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
                <Navigation/>
                <Search/>

                <div id = "tablePremierLeague">
                    <img src = {England}/>
                    <img src = {PremierLeagueImage}/>
                    <span>Premier League</span>

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

                        <div className = "tableStandings">
                            <span>1</span>
                            <img src = {ArsenalLondon}/>
                            <span>Arsenal</span>
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
                            <span>2</span>
                            <img src = {ManchesterCity}/>
                            <span>Manchester City</span>
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
                        <div className = "tableStandings">
                            <span>3</span>
                            <img src = {Newcastle}/>
                            <span>Newcastle</span>
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
                            <img src = {ManchesterUtd}/>
                            <span>Manchester Utd</span>
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
                            <img src = {Tottenham}/>
                            <span>Tottenham</span>
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
                            <img src = {Liverpool}/>
                            <span>Liverpool</span>
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
                            <img src = {Fulham}/>
                            <span>Fulham</span>
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
                            <img src = {Brighton}/>
                            <span>Brighton</span>
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
                </div>
                
        </div>
    )
}

export default PremierLeague;