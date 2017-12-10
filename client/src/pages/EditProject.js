import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOCAL_API } from '../config/config'
import request from 'request-promise';
import { Segment, Header, Form, Button, Message, Container, Breadcrumb } from 'semantic-ui-react'

class EditProject extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            error: '',
            success: '',
            project: this.props.location.state.project,
            userId: this.props.location.state.userId,
            name: this.props.location.state.project.name,
            desc: this.props.location.state.project.description,
            lang: this.props.location.state.project.language,
            gh_url: this.props.location.state.project.html_url,
            ext_url: this.props.location.state.project.ext_url
        }
    }

    // Save project to mock server
    handleSave = (e) => {
        e.preventDefault();
        let name = this.state.name.trim();
        let desc = this.state.desc.trim();
        let lang = this.state.lang.trim();
        let gh_url = '';
        let ext_url = '';
        if (this.state.gh_url) {
            gh_url = this.state.gh_url.trim();
        }
        if (this.state.ext_url) {
            ext_url = this.state.ext_url.trim();
        }

        if (!name || !desc || !lang) {
            this.flashMessage('error', 'Fields cannot be blank');
            return;
        }

        const project = this.state.project;
        let data = {
            name: name,
            description: desc,
            language: lang,
            id: project.id,
            html_url: gh_url,
            ext_url: ext_url
        }
        let options = {
            method: 'PUT',
            uri: `${LOCAL_API}/projects/${project.id}`,
            headers: { 'User-Agent': 'Request-Promise' },
            body: { id: project.id, userId: this.state.userId, project: data },
            json: true
        };
        request(options)
            .then(project => {
                this.flashMessage('success', 'Project saved successfully')
                return project;
            })
            .catch(err => {
                console.log(err);
                this.flashMessage('error', 'Error while saving project')
            });

        console.log('Saved');
    };

    handleNameChange = (e) => this.setState({ name: e.target.value });
    handleDescChange = (e) => this.setState({ desc: e.target.value });
    handleLangChange = (e) => this.setState({ lang: e.target.value });
    handleExtUrlChange = (e) => this.setState({ ext_url: e.target.value });
    handleGHUrlChange = (e) => this.setState({ gh_url: e.target.value });

    flashMessage = (status, message) => {
        if (status === 'success') {
            this.setState({ success: message });
            setTimeout(() => {
                this.setState({ success: '' });
            }, 2500);
        }
        else if (status === 'error') {
            this.setState({ error: message });
            setTimeout(() => {
                this.setState({ error: '' });
            }, 2500);
        }
    }

    render() {
        return (
            <Container>
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

                    <Form>
                        <Header as='h1'>
                            <Form.Field control={Form.Input} label='Title' value={this.state.name} onChange={this.handleNameChange} />
                        </Header>
                        <Form.Field control={Form.TextArea} label='Description' value={this.state.desc} onChange={this.handleDescChange} />
                        <Form.Field control={Form.Input} label="Project link" value={this.state.ext_url} onChange={this.handleExtUrlChange} />
                        <Form.Field control={Form.Input} label="Github link" value={this.state.gh_url} onChange={this.handleGHUrlChange} />
                        <Form.Field control={Form.Input} label="Languages (separate with comma)" value={this.state.lang} onChange={this.handleLangChange} />
                        <Button as={Link} to='/profile' style={{ marginRight: '15px' }}>Cancel</Button>
                        <Button type='submit' onClick={this.handleSave} primary>Submit</Button>
                    </Form>
                </Segment>
            </Container>
        );
    }
}

export default  EditProject