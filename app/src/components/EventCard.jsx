import React, { Component } from 'react';
import Clock from "./Clock.jsx";

export default class EventCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { player1First,
            player1Last,
            player1Country,
            player2First,
            player2Last,
            player2Country,
            startTime,
            tournamentName} = this.props.info;
        return (
            <div className="c-card c-card--color-primary">
                <div className="c-card__content">
                    <h2>{player1First + " " + player1Last + " [" + player1Country + "]" +
                        " vs " + player2First + player2Last + " [" + player2Country + "]"}</h2>
                </div>
                <div className="c-card__content">
                    <Clock startTime={startTime} />
                    <div className="c-card__content-tournament u-float-left">Tournamet: {tournamentName}</div>
                </div>
            </div>
        );
    }
}