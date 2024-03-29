import '../../styles/LaLiga.scss';
import '../../styles/Tables.scss';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation.js';
import Search from '../Search.js';

import Spain from '../../images/Spain.png';
import LaLigaImage from '../../images/LaLiga.png';
import Barcelona from '../../images/LaLiga/Barcelona.png';
import RealMadrid from '../../images/LaLiga/RealMadrid.png';
import RealSociedad from '../../images/LaLiga/RealSociedad.png';
import Atletico from '../../images/LaLiga/Atletico.png';
import Villarreal from '../../images/LaLiga/Villarreal.png';
import Betis from '../../images/LaLiga/Betis.png';
import Osasuna from '../../images/LaLiga/Osasuna.png';
import AthleticBilbao from '../../images/LaLiga/AthleticBilbao.png';
import Rayo from '../../images/LaLiga/Rayo.png';
import Mallorca from '../../images/LaLiga/Mallorca.png';
import Girona from '../../images/LaLiga/Girona.png';
import Valencia from '../../images/LaLiga/Valencia.png';
import Almeria from '../../images/LaLiga/Almeria.png';
import Espanyol from '../../images/LaLiga/Espanyol.png';
import Getafe from '../../images/LaLiga/Getafe.png';
import CeltaVigo from '../../images/LaLiga/CeltaVigo.png';
import Valladolid from '../../images/LaLiga/Valladolid.png';
import Sevilla from '../../images/LaLiga/Sevilla.png';
import Cadiz from '../../images/LaLiga/Cadiz.png';
import Elche from '../../images/LaLiga/Elche.png';



function LaLiga() {
    return(
        <div className = "LaLiga">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
                <Navigation/>
                <Search/>

                <div id = "tableLaLiga">
                    <img src = {Spain} id = "spainTableImage"/>
                    <img src = {LaLigaImage} id = "laLigaTableImage"/>
                    <span id = "laLigaTableSpan">La Liga</span>

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
                            <img src = {Barcelona}/>
                            <li><Link to = "/LaLiga/Clubs/Barcelona">Barcelona</Link></li>
                            <span>22</span>
                            <span>19</span>
                            <span>2</span>
                            <span>1</span>
                            <span>45-7</span>
                            <span>59</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings championsLeagueAdvance">
                            <span>2</span>
                            <img src = {RealMadrid}/>
                            <li><Link to = "/LaLiga/Clubs/RealMadrid">Real Madrid</Link></li>
                            <span>22</span>
                            <span>16</span>
                            <span>3</span>
                            <span>3</span>
                            <span>46-17</span>
                            <span>51</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings championsLeagueAdvance">
                            <span>3</span>
                            <img src = {RealSociedad}/>
                            <li><Link to = "/LaLiga/Clubs/RealSociedad">Real Sociedad</Link></li>
                            <span>22</span>
                            <span>13</span>
                            <span>4</span>
                            <span>5</span>
                            <span>32-22</span>
                            <span>43</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings championsLeagueAdvance">
                            <span>4</span>
                            <img src = {Atletico}/>
                            <li><Link to = "/LaLiga/Clubs/Atletico">Atletico</Link></li>
                            <span>22</span>
                            <span>12</span>
                            <span>5</span>
                            <span>5</span>
                            <span>31-17</span>
                            <span>41</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings europaLeagueAdvance">
                            <span>5</span>
                            <img src = {Betis}/>
                            <li><Link to = "/LaLiga/Clubs/Betis">Betis</Link></li>
                            <span>22</span>
                            <span>11</span>
                            <span>4</span>
                            <span>7</span>
                            <span>29-23</span>
                            <span>37</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className = "tableStandings conferenceLeagueAdvance">
                            <span>6</span>
                            <img src = {Rayo}/>
                            <li><Link to = "/LaLiga/Clubs/Rayo">Rayo</Link></li>
                            <span>22</span>
                            <span>9</span>
                            <span>7</span>
                            <span>6</span>
                            <span>29-24</span>
                            <span>34</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>7</span>
                            <img src = {AthleticBilbao}/>
                            <li><Link to = "/LaLiga/Clubs/AthleticBilbao">Athletic Bilbao</Link></li>
                            <span>22</span>
                            <span>9</span>
                            <span>5</span>
                            <span>8</span>
                            <span>31-23</span>
                            <span>32</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>8</span>
                            <img src = {Mallorca}/>
                            <li><Link to = "/LaLiga/Clubs/Mallorca">Mallorca</Link></li>
                            <span>22</span>
                            <span>9</span>
                            <span>4</span>
                            <span>9</span>
                            <span>20-22</span>
                            <span>31</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>9</span>
                            <img src = {Villarreal}/>
                            <li><Link to = "/LaLiga/Clubs/Villarreal">Villarreal</Link></li>
                            <span>22</span>
                            <span>9</span>
                            <span>4</span>
                            <span>9</span>
                            <span>24-22</span>
                            <span>31</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>10</span>
                            <img src = {Osasuna}/>
                            <li><Link to = "/LaLiga/Clubs/Osasuna">Osasuna</Link></li>
                            <span>22</span>
                            <span>8</span>
                            <span>6</span>
                            <span>8</span>
                            <span>19-21</span>
                            <span>30</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>11</span>
                            <img src = {Girona}/>
                            <li><Link to = "/LaLiga/Clubs/Girona">Girona</Link></li>
                            <span>22</span>
                            <span>7</span>
                            <span>6</span>
                            <span>9</span>
                            <span>33-33</span>
                            <span>27</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>12</span>
                            <img src = {Sevilla}/>
                            <li><Link to = "/LaLiga/Clubs/Sevilla">Sevilla</Link></li>
                            <span>22</span>
                            <span>6</span>
                            <span>7</span>
                            <span>9</span>
                            <span>24-30</span>
                            <span>25</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>13</span>
                            <img src = {Espanyol}/>
                            <li><Link to = "/LaLiga/Clubs/Espanyol">Espanyol</Link></li>
                            <span>22</span>
                            <span>5</span>
                            <span>9</span>
                            <span>8</span>
                            <span>27-33</span>
                            <span>24</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>14</span>
                            <img src = {CeltaVigo}/>
                            <li><Link to = "/LaLiga/Clubs/CeltaVigo">Celta Vigo</Link></li>
                            <span>22</span>
                            <span>6</span>
                            <span>6</span>
                            <span>10</span>
                            <span>23-34</span>
                            <span>24</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>15</span>
                            <img src = {Valladolid}/>
                            <li><Link to = "/LaLiga/Clubs/Valladolid">Valladolid</Link></li>
                            <span>22</span>
                            <span>7</span>
                            <span>3</span>
                            <span>12</span>
                            <span>16-30</span>
                            <span>24</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>16</span>
                            <img src = {Getafe}/>
                            <li><Link to = "/LaLiga/Clubs/Getafe">Getafe</Link></li>
                            <span>22</span>
                            <span>5</span>
                            <span>7</span>
                            <span>10</span>
                            <span>19-28</span>
                            <span>22</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings">
                            <span>17</span>
                            <img src = {Almeria}/>
                            <li><Link to = "/LaLiga/Clubs/Almeria">Almeria</Link></li>
                            <span>22</span>
                            <span>6</span>
                            <span>4</span>
                            <span>12</span>
                            <span>27-40</span>
                            <span>22</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>18</span>
                            <img src = {Cadiz}/>
                            <li><Link to = "/LaLiga/Clubs/Cadiz">Cadiz</Link></li>
                            <span>22</span>
                            <span>5</span>
                            <span>7</span>
                            <span>10</span>
                            <span>17-35</span>
                            <span>22</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>19</span>
                            <img src = {Valencia}/>
                            <li><Link to = "/LaLiga/Clubs/Valencia">Valencia</Link></li>
                            <span>22</span>
                            <span>5</span>
                            <span>5</span>
                            <span>12</span>
                            <span>26-27</span>
                            <span>20</span>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className = "tableStandings relegate">
                            <span>20</span>
                            <img src = {Elche}/>
                            <li><Link to = "/LaLiga/Clubs/Elche">Elche</Link></li>
                            <span>22</span>
                            <span>1</span>
                            <span>6</span>
                            <span>15</span>
                            <span>15-45</span>
                            <span>9</span>
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

                        <div id = "conferenceLeagueAdvance">
                            <div id = "conferenceLeagueAdvanceColor"></div>
                            <span>Conference League</span>
                        </div>

                        <div id = "relegations">
                            <div id = "relegationsColor"></div>
                            <span>Relegations - La Liga 2</span>
                        </div>
                </div>
                
        </div>
    )
}

export default LaLiga;