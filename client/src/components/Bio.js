import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOCAL_API } from '../config/config'
import request from 'request-promise';
import { Container, Segment, Image, Icon, Header, List, Button } from 'semantic-ui-react'

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interests: []
        }
    }

    // Get the user's interests
    getInterests = () => {
        let options = {
            uri: `${LOCAL_API}/users/${this.props.user.id}/interests/`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };

        return request(options)
            .then(interests => {
                this.setState({ interests: interests });
                return interests;
            });
    }

    componentDidMount() {
        this.getInterests().then(interests => {
            console.log('Successful');
        });
    }

    render() {
        const user = this.props.user.details;

        return (
            <Segment basic>
                <Image src={user.avatar_url} size='small' shape='circular' />

                <h1>{user.name}</h1>

                <List>
                    {user.location &&
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>{user.location}</List.Content>
                        </List.Item>}
                    {user.email &&
                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>{user.email}</List.Content>
                        </List.Item>
                    }
                    {user.company &&
                        <List.Item>
                            <List.Icon name='user circle outline' />
                            <List.Content>{user.company}</List.Content>
                        </List.Item>
                    }
                    {user.blog &&
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content><Link to={user.blog}>Website</Link></List.Content>
                        </List.Item>
                    }
                </List>

                <p>{user.bio}</p>
                <InterestsList interests={this.state.interests} />

                {this.props.editing &&
                    <Button as={Link}
                        size='tiny'
                        to={{
                            pathname: `/interest/new`,
                            state: { userId: this.props.user.id }
                        }}
                        primary
                    >
                        <Icon name='paint brush' />
                        Edit interests
                </Button>
                }
            </Segment>
        );
    }
}

// List all interests
class InterestsList extends Component {
    render() {
        let interests = this.props.interests.map(item => {
            return <li key={item.interest}> {item.interest} </li>
        });

        return (
            <Container>
                <Header as='h3'>Interests</Header>
                <ul>
                    {interests}
                </ul>
            </Container>
        );
    }
}

export default Bio;