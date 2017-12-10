import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';
import Particles from 'react-particles-js';
import { Segment, Container, Header, Button, Icon } from 'semantic-ui-react'

class Dashboard extends Component {
    render() {
        const styles = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: '-5',
            background: '#000'
        }

        return (
            <div>
                <Particles
                    params={{
                        particles: {
                            line_linked: {
                                shadow: { enable: true, color: "#3CA9D1", blur: 5 }
                            }
                        }
                    }}
                    style={styles}
                />
                <Segment
                    textAlign='center'
                    style={{ padding: '1em 0em' }}
                    vertical
                >
                    <Container text>
                        <Header as='h1' inverted style={{ fontSize: '2.5em', marginBottom: 0, marginTop: '3em' }}><Icon name='github' /> Welcome, {this.props.user.details.login}!</Header>
                        <Header
                            as='h2'
                            inverted
                            content='Show off your skills, projects and interests by modifying your profile page. Get started now!'
                            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                        /> 
                        <section style={{ marginTop: '2em', marginBottom: '0' }}>
                            <Button size='huge' style={{ marginRight: '20px' }} as={Link} to='/profile' primary>Modify Profile</Button>
                            <Logout setUser={this.props.setUser} />
                        </section>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default Dashboard