import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOCAL_API } from '../config/config'
import request from 'request-promise';
import { Segment, Header, Form, Button, Message, Container, Breadcrumb, List, Grid } from 'semantic-ui-react'

class NewInterest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            success: '',
            userId: this.props.location.state.userId,
            interests: []
        }
    }

    // Get the user's interests
    getInterests = () => {
        let options = {
            uri: `${LOCAL_API}/users/${this.state.userId}/interests/`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };

        return request(options)
            .then(interests => {
                this.setState({ interests: interests });
                return interests;
            });
    }

    // Add new interest
    addInterest = (interest) => {
        let options = {
            method: 'POST',
            uri: `${LOCAL_API}/users/${this.state.userId}/interests/`,
            headers: { 'User-Agent': 'Request-Promise' },
            body: { interest: interest },
            json: true
        };
        return request(options)
            .then(interest => {
                this.flashMessage('success', 'Interest successfully added')
                this.getInterests().then(interests => {
                });
                return interest;
            })
            .catch(err => {
                console.log(err);
                this.flashMessage('error', 'Unable to create interest')
            });
    }

    // Delete an interest
    handleDelete = (id) => {
        let options = {
            method: 'DELETE',
            uri: `${LOCAL_API}/interests/${id}`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };
        return request(options)
            .then(res => {
                this.flashMessage('success', 'Project successfully deleted')
                return this.getInterests().then(interests => {
                });
            })
            .catch(err => {
                console.log(err);
                this.flashMessage('error', 'Unable to delete project')
            });
    }

    // Save project to mock server
    handleSave = (id, interest) => {
        interest.trim();
        if (!interest) {
            this.flashMessage('error', 'Interest cannot be blank');
            return;
        }

        let options = {
            method: 'PUT',
            uri: `${LOCAL_API}/interests/${id}`,
            headers: { 'User-Agent': 'Request-Promise' },
            body: { id: id, userId: this.state.userId, interest: interest },
            json: true
        };
        request(options)
            .then(interest => {
                this.getInterests().then(interests => {
                });
                this.flashMessage('success', 'Interest saved successfully');
                return interest;
            })
            .catch(err => {
                console.log(err);
                this.flashMessage('error', 'Error while saving interest');
            });
    };

    // Show info messages
    flashMessage = (status, message) => {
        if (status === 'success') {
            this.setState({ success: message });
            setTimeout(() => {
                this.setState({ success: '' });
            }, 3000);
        }
        else if (status === 'error') {
            this.setState({ error: message });
            setTimeout(() => {
                this.setState({ error: '' });
            }, 3000);
        }
    }

    componentDidMount() {
        this.getInterests().then(interests => {
            console.log('Successful');
        });
    }

    render() {
        return (
            <Container style={{ width: '60%', margin: '0 auto' }}>
                <Breadcrumb>
                    <Breadcrumb.Divider icon='left chevron' />
                    <Breadcrumb.Section as={Link} to='/profile'>Back to profile</Breadcrumb.Section>
                </Breadcrumb>
                <Segment basic>
                    {this.state.error &&
                        <Message
                            negative
                            content={this.state.error}
                            style={{ marginBottom: '2em' }}
                        />
                    }
                    {this.state.success &&
                        <Message
                            success
                            content={this.state.success}
                            style={{ marginBottom: '2em' }}
                        />
                    }
                    <Header as='h1'>Modify interests</Header>
                    <section>
                        <EditInterests handleSave={this.handleSave} handleDelete={this.handleDelete} interests={this.state.interests} />
                    </section>
                    <Header as='h3'>Add a new interest</Header>
                    <AddInterest addInterest={this.addInterest} />
                </Segment>
            </Container>
        )
    }

}

class AddInterest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interest: ''
        }
    }

    // Handle input form events
    handleInterestChange = (e) => this.setState({ interest: e.target.value });

    addInterest = (interest) => {
        this.setState({ interest: '' });
        this.props.addInterest(this.state.interest);
    }

    render() {
        return (
            <Form>
                <Form.Field control={Form.Input} value={this.state.interest} onChange={this.handleInterestChange} />
                <Button type='submit' onClick={this.addInterest} primary>Submit</Button>
            </Form>
        )
    }
}

class EditInterests extends Component {
    render() {
        let interests = this.props.interests.map(item => {
            return (
                <Interest
                    key={item.id}
                    id={item.id}
                    interest={item.interest}
                    handleSave={this.props.handleSave}
                    handleDelete={this.props.handleDelete}
                />
            );
        });

        return (
            <Container>
                {interests}
            </Container>
        )
    }
}

class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            interest: this.props.interest
        }
    }

    handleEdit = () => {
        this.setState({ editing: true });
    }

    handleDelete = (e) => {
        e.preventDefault();
        let id = (this.props.id).toString();
        this.props.handleDelete(id);
        this.setState({});
    }

    handleSave = (e) => {
        e.preventDefault();
        this.props.handleSave(this.props.id, this.state.interest);
        this.setState({ editing: false, interest: '' });
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({ editing: false })
    }

    handleInterestChange = (e) => this.setState({ interest: e.target.value });

    render() {
        let content = [
            <Grid>
                <Grid.Column width='6'>
                    {this.props.interest} &nbsp;&nbsp;
                </Grid.Column>
                <Grid.Column width='5'>
                    <Button onClick={this.handleEdit} size='tiny'>Edit</Button>
                    <Button onClick={this.handleDelete} size='tiny' color='red' name='remove'>Delete</Button>
                </Grid.Column>
            </Grid>
        ];

        if (this.state.editing) {
            content = [
                <Grid>
                    
                        <Grid.Column width='6'>
                            <Form.Field width='6' control={Form.Input} value={this.state.interest} onChange={this.handleInterestChange} />
                        </Grid.Column>
                        <Grid.Column width='5'>
                            <Button onClick={this.handleCancel} size='tiny'>Cancel</Button>
                            <Button type='submit' onClick={this.handleSave} size='tiny' primary>Save</Button>
                        </Grid.Column>
                    
                </Grid>
            ];
        }

        return (<List>{content}</List>);
    }
}

export default NewInterest