import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Login from './Login';
import Logout from './Logout';

class Navbar extends Component {
    render() {
        return (
            <Menu secondary size='huge'>
                <Menu.Item as={Link} to='/' header>Home</Menu.Item>
                <Menu.Item as={Link} to='/users' header>Public Users</Menu.Item>
                
                {this.props.user && 
                    <Menu.Item as={Link} to='/profile' name='Profile' />
                }

                {this.props.user ?
                    <Logout setUser={this.props.setUser} context='nav' />
                    :
                    <Login setUser={this.props.setUser} context='nav' />
                }
            </Menu>
        );
    }
}

export default Navbar