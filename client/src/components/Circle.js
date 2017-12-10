import React, { Component } from 'react';

class Circle extends Component {
    render() {
        return (
            <div style={{
                WebkitBorderRadius: '8px',
                MozBorderRadius: '8px',
                borderRadius: '8px',
                width: '8px',
                height: '8px',
                background: this.props.colour,
                display: 'inline-block',
                marginRight: '5px'
            }}></div>
        )
    }
}

export default Circle