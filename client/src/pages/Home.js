import React, { Component } from 'react';
import Login from '../components/Login';
import Particles from 'react-particles-js';
import { Header, Segment, Container, Icon } from 'semantic-ui-react';

class Home extends Component {
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
                        <Header as='h1' inverted style={{ fontSize: '2.5em', marginBottom: 0, marginTop: '3em' }}>
                            <Icon name='github' /> GitHub Resume
                        </Header>
                        <Header
                            as='h2'
                            inverted
                            content='Generate a beautiful resume from your GitHub account. Log in now to get started!'
                            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                        />
                        <section style={{ marginTop: '2em', marginBottom: '0' }}>
                            <Login setUser={this.props.setUser} />
                        </section>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default Home;