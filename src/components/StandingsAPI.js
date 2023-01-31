import * as React from "react";
import './LiveAPI.js';
import PremierLeague from "./Standings/PremierLeague";


 function StandingsList() {
    standingsListItem = (standings) => {
        const clubImage = standings.LeagueTable.L[0].Tables[0];
        const clubName = standings.LeagueTable.L[0].Tables[0];
        const clubMatchesPlayed = standings.LeagueTable.L[0].Tables[0];
        const clubWins = standings.LeagueTable.L[0].Tables[0];
        const clubDraws = standings.LeagueTable.L[0].Tables[0];
        const clubLost = standings.LeagueTable.L[0].Tables[0];
        const clubPoints = standings.LeagueTable.L[0].Tables[0];
        const clubGoalsScored = standings.LeagueTable.L[0].Tables[0];
        const clubGoalsLost = standings.LeagueTable.L[0].Tables[0];
         return <PremierLeague 
                    clubImage = {clubImage} 
                    clubName = {clubName}
                    clubMatchesPlayed = {clubMatchesPlayed}
                    clubWins = {clubWins}
                    clubDraws = {clubDraws}
                    clubLost = {clubLost}
                    clubPoints = {clubPoints}
                    clubGoalsScored = {clubGoalsScored}
                    clubGoalsLost = {clubGoalsLost} />
    }

    
        return <ul>{ this.props.standings.map(this.standingsListItem) }</ul>
    
}
export default StandingsList;