import React from 'react';
import $ from 'jquery';

export default class GithubProfile extends React.Component {

    constructor(props){
        super();
        this.state = {}
    }
    componentDidMount(){
        let url = `https://api.github.com/users/${this.props.username}`;

        $.getJSON( url, function( data ) {
            this.setState({
                user: data
            })
        }.bind(this));
    }


    render() {
        console.log('this.state', JSON.stringify(this.state, undefined, 2));

        if(this.state.user){
            return (
                <div className="github-user">
                    <img className="github-user__avatar" src={this.state.user.avatar_url}/>
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


