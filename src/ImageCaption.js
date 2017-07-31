import React from 'react';

class ImageCaption extends React.Component {
    render() {
        return (
            <figure id={this.props.id}>
                <img src={this.props.source} alt="something"/>
                <figcaption>
                    {this.props.text}
                </figcaption>
            </figure>
        );
    }
}

export default ImageCaption;