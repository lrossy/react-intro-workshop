import React from 'react';

export default class YouClicked extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "You have not clicked the button",
            timesClicked: 0,
            timesReset: 0
        };
    }
    _handleButtonClick(){
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });
    }

    _reset() {
        this.setState({
            timesReset: this.state.timesReset + 1,
            timesClicked: 0
        })
    }

    render() {
        return (
            <div className="guess-number">
                <button onClick={this._handleButtonClick.bind(this)} className="btn btn-primary">YouClicked</button>
                <button onClick={this._reset.bind(this)} className="btn btn-secondary">Reset</button>
                <p>You clicked me {this.state.timesClicked} times</p>
                <p>You reset me {this.state.timesReset} times</p>
            </div>
        );
    }
};