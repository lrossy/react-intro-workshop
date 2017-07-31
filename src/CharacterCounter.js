import React from 'react';

export default class CharacterCounter extends React.Component {

    constructor(){
        super();
        this.state = {
            currentInput: ""
        };
    }

    _handleInput(event) {
        var value = event.target.value;
        console.log('ff',value)

        this.setState({
            currentInput: value
        });
    }

    render() {
        return (
            <div className="guess-number">
                <input type="text" onInput={this._handleInput.bind(this)}/>
                <p>{this.state.currentInput.length}</p>
            </div>
        );
    }
};