import React from "react";

export class StandingsList extends React.Component {
    standingsAPI = (standings) => {
        const clubRank1 = standings.LeagueTable.L[0].Tables[0].team[0].rnk;
        const clubImageRank1 = standings.LeagueTable.L[0].Tables[0].team[0].Img;
        return <StandingsList clubRank1 = {clubRank1} clubImageRank1 = {clubImageRank1} />;
    }
    render() {
        return <ul>{ this.props.standings.map(this.standingsAPI)}</ul>
    }
}