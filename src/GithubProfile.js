import React from 'react';
import $ from 'jquery';

export default class GithubProfile extends React.Component {

    constructor(props){
        super();
        this.state = {}
    }
    componentDidMount(){
        let url = `https://api.github.com/users/${this.props.username}`;
        // let user = {
        //     avatar: 'url',
        //     login: 'lrossy',
        //     name: 'luke',
        //     bio: 'bio'
        // };
        // console.log('componentDidMount',  user);
        //
        // this.setState({
        //     user
        // });
        $.getJSON( url, function( data ) {
            let userData = {
                avatar: data.avatar_url,
                login: data.login,
                name: data.name,
                bio: data.bio
            };
            this.setState({
                user: userData
            })
        }.bind(this));
    }


    render() {
        if(this.state.user){
            return (
                <div className="github-user">
                    <img className="github-user__avatar" src={this.state.user.avatar}/>
                    <div className="github-user__info">
                        <p>{this.state.user.login} ({this.state.user.name})</p>
                        <p>{this.state.user.bio} </p>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="github-user">
                    <p> loading ...</p>
                </div>
            );
        }


    }
};


GithubProfile.propTypes = {

};﻿