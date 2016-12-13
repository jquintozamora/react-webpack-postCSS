import React, { Component } from 'react';

export default class ColorPicker extends Component {

    constructor(props) {
        super(props);
    }

    handleUpdate(e) {
        const suffix = e.target.dataset.sizing || '';
        debugger;
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
    }

    componentDidUpdate() {
        const inputs = document.querySelectorAll('.controls input');



        //inputs.forEach(input => input.addEventListener('change', this.handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', this.handleUpdate));

    }
    render() {

        return (
            <div className="c-colorpicker">
                <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

                <div className="controls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input type="range" name="spacing" min="10" max="200" value="10" onChange={this.handleUpdate} data-sizing="px" />

                    <label htmlFor="blur">Blur:</label>
                    <input type="range" name="blur" min="0" max="25" value="10" onChange={this.handleUpdate} data-sizing="px" />

                    <label htmlFor="base">Base Color</label>
                    <input type="color" name="base" value="#ffc600" onChange={this.handleUpdate} />
                </div>
            </div>
        );
    }
}