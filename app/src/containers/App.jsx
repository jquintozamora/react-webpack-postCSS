import React, { Component } from 'react';
import GridLayout from './../components/GridLayout.jsx';
import ColorPicker from "./../components/ColorPicker.jsx";

import { getResults } from "../utils/mock/mockApi";

require('core-js');


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }

  componentWillMount() {
    getResults()
      .then(data => {
        const results = data.data;
        let filteredResults = [];
        Object.keys(results).forEach((item) => {
          const liveEvents = results[item].liveEvents;
          if ((liveEvents) && (liveEvents.length > 0)) {
            liveEvents.forEach((liveEvent) => {
              const player1 = liveEvent.teamA.team.player1;
              const player2 = liveEvent.teamB.team.player1;
              const time = liveEvent.startTime.time;
              filteredResults.push({
                player1First: player1.firstName,
                player1Last: player1.lastName,
                player1Country: player1.country,
                player2First: player2.firstName,
                player2Last: player2.lastName,
                player2Country: player2.country,
                startTime: time.substring(0, time.indexOf("+")),
                tournamentName: liveEvent.tournamentName
              })
            })
          }
        });
        this.setState({ data: filteredResults });
      })
      .catch(error => {
        console.error(error);
        this.setState({ data: [], error: error });
      });
  }
  render() {

    return (
      <div className="o-wrapper">
        <div className="o-title">Grid Layout Test with Post CSS</div>
        <GridLayout data={this.state.data} />
        <div className="o-title">CSS Variables test with Post CSS</div>
        <ColorPicker />
      </div>
    );
  }
}