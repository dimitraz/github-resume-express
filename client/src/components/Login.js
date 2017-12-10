import React, { Component } from 'react';
import firebase, { auth, provider } from '../config/firebase.js';
import { LOCAL_API, GITHUB_API } from '../config/config'
import request from 'request-promise';
import _ from 'lodash';
import { Menu, Button } from 'semantic-ui-react';

const randomInterests = ['Pizza', 'Mario-Kart 64', 'Airports', 'Hyperloop', 'Electro Synth', 'The Roman Forum as Cicero saw it',
'The Old Kanye', 'Crop circles', 'Eames Chairs', 'Competitive trampolining', 'Russian Constructivism', 'WW1 Memorabilia',
'Planetariums', 'UFO Conspiracy theories', 'Dadism'];

class Login extends Component {
    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let id = result.user.providerData[0].uid;

                this.findUser(id).then(user => {
                    // Load user if exists
                    if (user) {
                        this.props.setUser(id, user);
                    }
                    // Else create new user
                    else {
                        this.createUser(id).then(user => {
                            this.props.setUser(id, user);

                            // And save their repos to the mock server
                            this.createProjects(id, user.details.login).then(projects => {
                                console.log(projects);
                            });

                            this.createInterests(id).then(interests => {
                                console.log(interests);
                            });
                        });
                    }
                });
            });
    }

    // Verify wether a user exists in the server or not
    findUser = (id) => {
        return fetch(`${LOCAL_API}/users/${id}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error()
            })
            .then(user => {
                return user;
            }).catch(err => {
                return null;
            })
    }

    // Create a new user
    createUser = (id) => {
        let options = {
            uri: `${GITHUB_API}/${id}`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };

        return request(options)
            .then(user => {
                let options = {
                    method: 'POST',
                    uri: `${LOCAL_API}/users/`,
                    headers: { 'User-Agent': 'Request-Promise' },
                    body: { id: id, details: user },
                    json: true
                };

                return request(options)
                    .then(user => {
                        return user;
                    })
                    .catch(err => {
                        return null;
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    // Save user's projects to json server
    createProjects = (id, login) => {
        let options = {
            uri: `${GITHUB_API}s/${login}/repos`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };

        return request(options)
            .then(projects => {
                for (let j = 0; j < projects.length; j++) {
                    let project = projects[j];

                    function executeRequest() {
                        let options = {
                            method: 'POST',
                            uri: `${LOCAL_API}/users/${id}/projects`,
                            headers: { 'User-Agent': 'Request-Promise' },
                            body: { userId: id, id: project.id, project: project },
                            json: true
                        };

                        return request(options)
                            .then(project => {
                                return project;
                            })
                            .catch(err => {
                                console.log('Error in subrequest', err)
                            });
                    }

                    setTimeout(() => {
                        executeRequest();
                    }, 1500);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    // Create dummy interests
    createInterests = (id) => {
        let interests = _.sampleSize(randomInterests, 4)

        for (let j = 0; j < interests.length; j++) {
            let interest = interests[j];

            function executeRequest() {
                let options = {
                    method: 'POST',
                    uri: `${LOCAL_API}/users/${id}/interests`,
                    headers: { 'User-Agent': 'Request-Promise' },
                    body: { userId: id, interest: interest },
                    json: true
                };

                return request(options)
                    .then(interest => {
                        return interest;
                    })
                    .catch(err => {
                        console.log('Error in subrequest', err)
                    });
            }

            setTimeout(() => {
                executeRequest();
            }, 1500);
        }
    }

    render() {
        return (
            <div style={{ display: 'inline' }}>
                {this.props.context === 'nav' ?
                    <Menu.Item onClick={this.login} name='Log in' />
                    :
                    <Button size='huge' onClick={this.login} content='Log in' />
                }
            </div>
        );
    }
}

export default Login;