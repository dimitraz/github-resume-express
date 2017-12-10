import React, { Component } from 'react';
import firebase, { auth, provider } from '../config/firebase.js';
import { Menu, Button } from 'semantic-ui-react';

class Logout extends Component {
    logout = () => {
        auth.signOut()
            .then(() => {
                this.props.setUser('', null);
            });
    }

    render() {
        return(
            <div style={{ display: 'inline' }}>
                {this.props.context === 'nav' ?
                    <Menu.Item onClick={this.logout} name='Log Out' />
                :
                    <Button size='huge' onClick={this.logout} content='Log Out' />
                }
            </div>
        );
    }
}

export default Logout;