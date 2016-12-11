import React, { Component } from 'react';


export default class Clock extends Component {

    render() {
        return (
            <div className="outer_face">

                <div className="marker oneseven"></div>
                <div className="marker twoeight"></div>
                <div className="marker fourten"></div>
                <div className="marker fiveeleven"></div>


                <div className="inner_face">

                    <div className="hand hour"></div>
                    <div className="hand minute"></div>

                </div>

            </div>
        );
    }
}