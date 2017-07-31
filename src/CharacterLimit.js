import React from 'react';
import PropTypes from 'prop-types'

export default class CharacterLimit extends React.Component {

    constructor(props){
        super();
        this.state = {
            currentInput: "",
            limit: props.limit
        };
    }

    _handleInput(event) {
        var value = event.target.value;

        if(event.target.value.length <= this.state.limit){
            this.setState({
                currentInput: value
            });
        }

    }

    render() {
        return (
            <div className="guess-number">
                <input type="text" onInput={this._handleInput.bind(this)} value={this.state.currentInput}/>
                <p>{this.state.limit - this.state.currentInput.length} remaining</p>
            </div>
        );
    }
};


CharacterLimit.propTypes = {
    limit: PropTypes.number
};﻿