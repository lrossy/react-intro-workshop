import React from 'react';
import PropTypes from 'prop-types'
import $ from 'jquery';

export default class GithubProfile extends React.Component {

    constructor(props){
        super();
        this.state = {}
    }
    componentDidMount(){
        let url = `https://api.github.com/users/${this.props.username}`;


        $.getJSON( url, function( data ) {
            console.log(' data.avatar_url',  data);

            this.setState({
                avatar: data.avatar_url,
                login: data.login,
                name: data.name,
                bio: data.bio
            })
        }.bind(this));
    }


    render() {

        return (
            <div className="github-user">
                <img className="github-user__avatar" src={this.state.avatar}/>
                <div className="github-user__info">
                    <p>{this.state.login} ({this.state.name})</p>
                    <p>{this.state.bio} </p>
                </div>
            </div>
        );

    }
};


GithubProfile.propTypes = {

};﻿