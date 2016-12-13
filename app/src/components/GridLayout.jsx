import React, { Component, PropTypes } from 'react';

import EventCard from "./EventCard.jsx";
import ColorPicker from "./ColorPicker.jsx";

const Event = ({ name }) => <div> [player1 firstName] [player1 lastName] [player1 country] vs [player2 firstName] [player2 lastName] [player2 country] {name} </div> // Stateless/Pure component

export default class GridLayout extends Component {

    constructor(props) {
        super(props);
    } 

    _getColumns() {
        const { columns, data } = this.props;

        let arrayColumns = [];
        for (let i = 0; i <= data.length - 1; i++) {
            arrayColumns.push(<div className={"c-grid__col-1-" + columns} key={i}><EventCard info={data[i]} /></div>);
        }
        return arrayColumns;
    }

    render() {
        return (
            <div className="c-grid">
                {this._getColumns()}
                <ColorPicker />
            </div>
        );
    }
}

GridLayout.defaultProps = {
    columns: 2, // Columns values can be 2, 4 or 8.
    data: []
}
GridLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}