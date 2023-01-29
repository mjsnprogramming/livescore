import React from "react";
import PremierLeague from "./Standings/PremierLeague";

export class StandingsList extends React.Component {
    standingsAPI = (standings) => {
        const clubRank = standings.LeagueTable.L[0].Tables[0].team[0].rnk;
        const clubImage = standings.LeagueTable.L[0].Tables[0].team[0].Img;
        const clubName = standings.LeagueTable.L[0].Tables[0].team[0].Tnm;
        const clubMatchesPlayed = standings.LeagueTable.L[0].Tables[0].team[0].pld;
        const clubWins = standings.LeagueTable.L[0].Tables[0].team[0].win;
        const clubDraws = standings.LeagueTable.L[0].Tables[0].team[0].drw;
        const clubLost = standings.LeagueTable.L[0].Tables[0].team[0].lst;
        const clubPoints = standings.LeagueTable.L[0].Tables[0].team[0].pts;
        const clubGoalsScored = standings.LeagueTable.L[0].Tables[0].team[0].gf;
        const clubGoalsLost = standings.LeagueTable.L[0].Tables[0].team[0].ga;
        return <PremierLeague 
                    clubRank = {clubRank} 
                    clubImage = {clubImage} 
                    clubName = {clubName}
                    clubMatchesPlayed = {clubMatchesPlayed}
                    clubWins = {clubWins}
                    clubDraws = {clubDraws}
                    clubLost = {clubLost}
                    clubPoints = {clubPoints}
                    clubGoalsScored = {clubGoalsScored}
                    clubGoalsLost = {clubGoalsLost} />;
    }
    render() {
        return <ul>{ this.props.standings.map(this.standingsAPI)}</ul>
    }
}
export default StandingsList;