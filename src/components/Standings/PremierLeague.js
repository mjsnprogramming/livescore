
import '../../styles/Tables.scss';
import {Link} from 'react-router-dom';
import '../../styles/PremierLeague.scss';
import axios from 'axios';

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

    const options = {
        method: 'get',
        url: 'https://soccer.sportmonks.com/api/v2.0/standings/season/17141?api_token={j9WwIU9jvKyr2QuMtGshAXXyA23kXsLaW71F8arcIOO5TWYSLSANjxr7vvRC}',
        headers: { }
      };

      axios.request(options).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      })
    
    return(
        <div className = "PremierLeague">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
                <Navigation/>
                <Search/>
                
                <div id = "tablePremierLeague">
                    <img src = {England} id = "englandTableImage"/>
                    <img src = {PremierLeagueImage} id = "premierLeagueTableImage"/>
                    <span id = "premierLeagueTableSpan">Premier League</span>

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
                            <img src = {ArsenalLondon}/>
                    
                            <li><Link to = "/PremierLeague/Clubs/Arsenal">Arsenal</Link></li>
                           
                            <span>23</span>
                            <span>17</span>
                            <span>3</span>
                            <span>3</span>
                            <span>51-23</span>
                            <span>54</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings championsLeagueAdvance">
                            <span>2</span>
                            <img src = {ManchesterCity}/>
                            <li><Link to = "/PremierLeague/Clubs/ManchesterCity">Manchester City</Link></li>
                            <span>24</span>
                            <span>16</span>
                            <span>4</span>
                            <span>4</span>
                            <span>60-24</span>
                            <span>52</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings championsLeagueAdvance">
                            <span>3</span>
                            <img src = {ManchesterUtd}/>
                            <li><Link to = "/PremierLeague/Clubs/ManchesterUnited">Manchester United</Link></li>
                            <span>24</span>
                            <span>15</span>
                            <span>4</span>
                            <span>5</span>
                            <span>41-28</span>
                            <span>49</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings championsLeagueAdvance">
                            <span>4</span>
                            <img src = {Tottenham}/>
                            <li><Link to = "/PremierLeague/Clubs/Tottenham">Tottenham</Link></li>
                            <span>24</span>
                            <span>13</span>
                            <span>3</span>
                            <span>8</span>
                            <span>44-35</span>
                            <span>42</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings europaLeagueAdvance">
                            <span>5</span>
                            <img src = {Newcastle}/>
                            <li><Link to = "/PremierLeague/Clubs/Newcastle">Newcastle</Link></li>
                            <span>23</span>
                            <span>10</span>
                            <span>11</span>
                            <span>2</span>
                            <span>35-15</span>
                            <span>41</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings">
                            <span>6</span>
                            <img src = {Fulham}/>
                            <li><Link to = "/PremierLeague/Clubs/Fulham">Fulham</Link></li>
                            <span>24</span>
                            <span>11</span>
                            <span>5</span>
                            <span>8</span>
                            <span>35-30</span>
                            <span>38</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>7</span>
                            <img src = {Brighton}/>
                            <li><Link to = "/PremierLeague/Clubs/Brighton">Brighton</Link></li>
                            <span>22</span>
                            <span>10</span>
                            <span>5</span>
                            <span>7</span>
                            <span>39-29</span>
                            <span>35</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>8</span>
                            <img src = {Liverpool}/>
                            <li><Link to = "/PremierLeague/Clubs/Liverpool">Liverpool</Link></li>
                            <span>22</span>
                            <span>10</span>
                            <span>5</span>
                            <span>7</span>
                            <span>38-28</span>
                            <span>35</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>9</span>
                            <img src = {Brentford}/>
                            <li><Link to = "/PremierLeague/Clubs/Brentford">Brentford</Link></li>
                            <span>23</span>
                            <span>8</span>
                            <span>11</span>
                            <span>4</span>
                            <span>37-30</span>
                            <span>35</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>10</span>
                            <img src = {ChelseaLondon}/>
                            <li><Link to = "/PremierLeague/Clubs/Chelsea">Chelsea</Link></li>
                            <span>23</span>
                            <span>8</span>
                            <span>7</span>
                            <span>8</span>
                            <span>23-23</span>
                            <span>31</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>11</span>
                            <img src = {AstonVilla}/>
                            <li><Link to = "/PremierLeague/Clubs/AstonVilla">Aston Villa</Link></li>
                            <span>23</span>
                            <span>8</span>
                            <span>4</span>
                            <span>11</span>
                            <span>28-38</span>
                            <span>28</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>12</span>
                            <img src = {CrystalPalace}/>
                            <li><Link to = "/PremierLeague/Clubs/CrystalPalace">Crystal Palace</Link></li>
                            <span>23</span>
                            <span>6</span>
                            <span>8</span>
                            <span>9</span>
                            <span>21-31</span>
                            <span>26</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>13</span>
                            <img src = {Nottingham}/>
                            <li><Link to = "/PremierLeague/Clubs/Nottingham">Nottingham</Link></li>
                            <span>23</span>
                            <span>6</span>
                            <span>7</span>
                            <span>10</span>
                            <span>18-38</span>
                            <span>25</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>14</span>
                            <img src = {Leicester}/>
                            <li><Link to = "/PremierLeague/Clubs/Leicester">Leicester</Link></li>
                            <span>23</span>
                            <span>7</span>
                            <span>3</span>
                            <span>13</span>
                            <span>36-41</span>
                            <span>24</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>15</span>
                            <img src = {Wolves}/>
                            <li><Link to = "/PremierLeague/Clubs/Wolves">Wolves</Link></li>
                            <span>23</span>
                            <span>6</span>
                            <span>5</span>
                            <span>12</span>
                            <span>17-32</span>
                            <span>21</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>16</span>
                            <img src = {Everton}/>
                            <li><Link to = "/PremierLeague/Clubs/Everton">Everton</Link></li>
                            <span>23</span>
                            <span>5</span>
                            <span>6</span>
                            <span>12</span>
                            <span>17-30</span>
                            <span>21</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>17</span>
                            <img src = {Bournemouth}/>
                            <li><Link to = "/PremierLeague/Clubs/Bournemouth">Bournemouth</Link></li>
                            <span>23</span>
                            <span>5</span>
                            <span>6</span>
                            <span>12</span>
                            <span>21-44</span>
                            <span>21</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>18</span>
                            <img src = {WestHamUnited}/>
                            <li><Link to = "/PremierLeague/Clubs/WestHamUnited">West Ham</Link></li>
                            <span>23</span>
                            <span>5</span>
                            <span>5</span>
                            <span>13</span>
                            <span>19-29</span>
                            <span>20</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>19</span>
                            <img src = {Leeds}/>
                            <li><Link to = "/PremierLeague/Clubs/Leeds">Leeds</Link></li>
                            <span>23</span>
                            <span>4</span>
                            <span>7</span>
                            <span>12</span>
                            <span>28-39</span>
                            <span>19</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>20</span>
                            <img src = {Southampton}/>
                            <li><Link to = "/PremierLeague/Clubs/Southampton">Southampton</Link></li>
                            <span>23</span>
                            <span>5</span>
                            <span>3</span>
                            <span>15</span>
                            <span>19-40</span>
                            <span>18</span>
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
                            <span>Relegations - Championship</span>
                        </div>
                </div>
                
        </div>
    );
}
export default PremierLeague;