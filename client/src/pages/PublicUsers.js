import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'request-promise';
import _ from 'lodash';
import { LOCAL_API } from '../config/config'
import { Segment, Container, Header, Image, Card, Icon, Input } from 'semantic-ui-react'

class PublicUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            sort: 'login',
            search: ''
        }
    }

    handleChange = (type, value) => {
        if (type === 'search') {
            this.setState({ search: value });
        } else {
            this.setState({ sort: value });
        }
    };

    componentDidMount() {
        let options = {
            uri: `${LOCAL_API}/users/`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };

        return request(options)
            .then(users => {
                // let sorted = _.sortBy(users, this.state.sort)
                this.setState({ users: users });
                return users;
            });
    }

    render() {
        let list = this.state.users.filter(user => {
            if (this.state.sort === 'login') {
                return user.details.login.toLowerCase().search(
                    this.state.search.toLowerCase()) !== -1;
            }
            else if (this.state.sort === 'location') {
                if (user.details.location) {
                    return user.details.location.toLowerCase().search(
                        this.state.search.toLowerCase()) !== -1;
                }
            }
        });
        let filteredList = _.sortBy(list, this.state.sort);
        let users = filteredList.map(user => {
            return (<User key={user.details.id} user={user} />);
        })
        
        return (
            <Container>
                <Header as='h1'>All users</Header>

                <SelectBox
                    onUserInput={this.handleChange}
                    filterText={this.state.search}
                    sort={this.state.sort} />

                <Card.Group>
                    {users}
                </Card.Group>
            </Container>
        );
    }
}

class User extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <Card>
                <Image
                    src={user.details.avatar_url}
                    as={Link}
                    to={{
                        pathname: `/profile/${user.details.id}`,
                        state: { user: user }
                    }} />
                <Card.Content>
                    <Card.Header
                        as={Link}
                        to={{
                            pathname: `/profile/${user.details.id}`,
                            state: { user: user }
                        }}>
                        {user.details.login}
                    </Card.Header>
                    {user.details.location &&
                        <Card.Meta> <Icon name='marker' /> {user.details.location}</Card.Meta>
                    }
                    <Card.Description>{user.details.bio}</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

class SelectBox extends React.Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        console.log(type, value);
        this.props.onUserInput(type, value);
    };

    handleTextChange = (e) => {
        this.handleChange(e, 'search', e.target.value);
    };

    handleSortChange = (e) => {
        this.handleChange(e, 'sort', e.target.value);
    };

    render() {
        let options = [
            { key: 'login', value: 'login', text: 'Username' },
            { key: 'location', value: 'location', text: 'Location' },
        ]

        return (
            <Segment basic>
                <Input type='text' placeholder='Search'
                    value={this.props.filterText}
                    onChange={this.handleTextChange} />

                &nbsp;&nbsp; Sort by: &nbsp;&nbsp;
                <select id='sort'
                    value={this.props.sort}
                    options={options}
                    onChange={this.handleSortChange}>
                    <option value='login'>Username</option>
                    <option value='location'>Location</option>
                </select>
            </Segment>
        );
    }
}

export default PublicUsers;