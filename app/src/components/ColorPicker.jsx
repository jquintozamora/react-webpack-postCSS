import React, { Component } from 'react';

export default class ColorPicker extends Component {

    constructor(props) {
        super(props);
        
        // TODOs
        // Look into css variables polyfill internet explorer 11
        // Follow this conversation between CSS Variables and React: https://github.com/facebook/react/issues/6411
        //      Add support for CSS variables in style attributes
        // Look into how PostCSS handle the CSS Variables. It convert in compile time? Are the variables passed into the CSS memory?

    }

    handleRangeUpdate = (e) => {
        const suffix = e.target.dataset.sizing || '';
        

        // Because we are using postCSS to handle the CSS transformation, we can´t use setProperty directly with --variables
        // As they will be transformed by postCSS plugin https://github.com/postcss/postcss-custom-properties#variables
        // in order to be compatible with older versions doesn´t support css variables https://www.w3.org/TR/css-variables/ var(--name);
        // That means, even if you can "transpile" CSS Variables to provide the right value in the CSS, you can´t use them as a variables,
        // you can use as a constants to define the first status, but NOT variables to modify the behaviour of a given class by changing the variables
        // values with JavaScript.
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
        //console.log(document.documentElement.style);

    }

    componentDidUpdate() {
        //IMPORTANT, when we are using input range or color in React, we have
        // two choices:
        // 1. Controlled (by React) if we use the property value, and then automatically it need to be handle in the state
        // 2. UnControlled. Then we should use defaultValue instead value.
        // More info: https://facebook.github.io/react/docs/forms.html
        
        const inputs = document.querySelectorAll('.controls input');
        inputs.forEach(input => input.addEventListener('change', this.handleRangeUpdate));
        //inputs.forEach(input => input.addEventListener('mousemove', this.handleRangeUpdate));
    }

    render() {

        return (
            <div className="c-colorpicker">
                <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

                <div className="controls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input type="range" name="spacing" min="10" max="200" defaultValue="10" data-sizing="px" />

                    <label htmlFor="blur">Blur:</label>
                    <input type="range" name="blur" min="0" max="25" defaultValue="10" data-sizing="px" />

                    <label htmlFor="base">Base Color</label>
                    <input type="color" name="base" defaultValue="#ffc600" />
                </div>

                <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />

            </div>
        );
    }
}