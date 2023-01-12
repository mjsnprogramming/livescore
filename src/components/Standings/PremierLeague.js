import '../../styles/PremierLeague.scss';

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
import Brentford from '../../images/PremierLeague/Brentford.png';
import ChelseaLondon from '../../images/PremierLeague/ChelseaLondon.png';
import AstonVilla from '../../images/PremierLeague/AstonVilla.png';
import CrystalPalace from '../../images/PremierLeague/CrystalPalace.png';
import Leicester from '../../images/PremierLeague/Leicester.png';
import Leeds from '../../images/PremierLeague/Leeds.png';
import Nottingham from '../../images/PremierLeague/Nottingham.png';
import Bournemouth from '../../images/PremierLeague/Bournemouth.png';
import WestHamUnited from '../../images/PremierLeague/WestHamUnited.png';
import Everton from '../../images/PremierLeague/Everton.png';
import Wolves from '../../images/PremierLeague/Wolves.png';
import Southampton from '../../images/PremierLeague/Southampton.png';



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

                        <div className = "tableStandings">
                            <span>9</span>
                            <img src = {Brentford}/>
                            <span>Brentford</span>
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
                            <img src = {ChelseaLondon}/>
                            <span>Chelsea</span>
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
                            <img src = {AstonVilla}/>
                            <span>Aston Villa</span>
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
                            <img src = {CrystalPalace}/>
                            <span>Crystal Palace</span>
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
                            <img src = {Leicester}/>
                            <span>Leicester</span>
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
                            <img src = {Leeds}/>
                            <span>Leeds</span>
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
                            <img src = {Nottingham}/>
                            <span>Nottingham</span>
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
                            <img src = {Bournemouth}/>
                            <span>Bournemouth</span>
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
                            <img src = {WestHamUnited}/>
                            <span>WestHamUnited</span>
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
                            <span>18</span>
                            <img src = {Everton}/>
                            <span>Everton</span>
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
                            <span>19</span>
                            <img src = {Wolves}/>
                            <span>Wolves</span>
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
                            <span>20</span>
                            <img src = {Southampton}/>
                            <span>Southampton</span>
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