import React from 'react';
import PropTypes from 'prop-types'

export default class NumberGuessing extends React.Component {

    constructor(props){
        super();
        this.state = {}
    }
    componentWillMount(){
        this._startGame()
    }
    _startGame(){

        this.setState({
            gameStatus: "playing",
            currentInput: 0,
            maxTries: 5,
            guesses: [],
            attempts: 0,
            numberToGuess: Math.floor((Math.random() * 100) + 1),
            hint: ""
        });
    }

    _handleButtonClick(){

        let hint = 'too low!';
        let gameStatus = 'playing';
        let attempts = this.state.attempts + 1;
        if(attempts >= this.state.maxTries){
            gameStatus = 'lose';
        }
        if(+this.refs.guess.value === this.state.numberToGuess){
            gameStatus = 'win';
        }
        else if(+this.refs.guess.value > this.state.numberToGuess){
            hint = 'too high!';
        }
        var guesses = this.state.guesses.slice();
        guesses.push(this.refs.guess.value);

        this.setState({
            currentInput: this.refs.guess.value,
            guesses: guesses,
            attempts: attempts,
            gameStatus: gameStatus,
            hint: hint
        });
        console.log('this.state', this.state);
    }

    render() {
        if(!this.state.gameStatus){
            return null;
        }else if(this.state.gameStatus === 'playing'){
            return (
                <div className="guess-number">
                    <h4>Guess a number between 1 and 100</h4>
                    <p>Your Guesses: { this.state.guesses.join(',')}</p>
                    <p>{ this.state.hint }</p>
                    <p>Remaining tries: { this.state.maxTries - this.state.attempts}</p>
                    <input ref="guess" type="text"/>
                    <button onClick={this._handleButtonClick.bind(this)} className="btn btn-primary">Guess Number</button>
                </div>
            );
        }else{
            return (
                <div className="guess-number">
                    <p>You { this.state.gameStatus}</p>
                    <button onClick={this._startGame.bind(this)} className="btn btn-primary">New Game</button>
                </div>
            );
        }

    }
};


NumberGuessing.propTypes = {
    guesses: PropTypes.array,
    highLimit: PropTypes.number,
    currentInput: PropTypes.number,
    lowLimit: PropTypes.number,
    numberToGuess: PropTypes.number
};﻿