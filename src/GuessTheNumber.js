import React from 'react';
import PropTypes from 'prop-types'

export default class GuessTheNumber extends React.Component {
    _handleButtonClick(){
        if(+this.refs.userGuess.value === +this.props.numberToGuess){
            alert('You are correct')
        }
        else if(+this.refs.userGuess.value < +this.props.numberToGuess){
            alert('You are too low')
        }else{
            alert('You are too high')
        }
    }
    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }
    render() {
        return (
            <div className="guess-number">
                <input ref="userGuess" type="text" defaultValue={this.props.numberToGuess}/>
                <button onClick={this._handleButtonClick.bind(this)} className="btn btn-primary">Guess</button>
            </div>
        );
    }
};

GuessTheNumber.propTypes = {
    numberToGuess: PropTypes.number
};﻿