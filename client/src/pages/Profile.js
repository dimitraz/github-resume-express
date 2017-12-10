import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOCAL_API } from '../config/config';
import Circle from '../components/Circle';
import request from 'request-promise';
import colours from '../api/colours_api';
import { Container, Icon, Segment, Header, Button, Modal, Message, List, Form } from 'semantic-ui-react';

// Profile page 
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            success: '',
            projects: []
        }
    }

    // Get the users projects
    getProjects = () => {
        let options = {
            uri: `${LOCAL_API}/users/${this.props.user.id}/projects/`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };

        return request(options)
            .then(projects => {
                this.setState({ projects: projects });
                return projects;
            });
    }

    // Delete a project
    handleDelete = (id) => {
        let options = {
            method: 'DELETE',
            uri: `${LOCAL_API}/projects/${id.toString()}`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };
        return request(options)
            .then(res => {
                this.flashMessage('success', 'Project successfully deleted')
                return this.getProjects().then(projects => {
                });
            })
            .catch(err => {
                console.log(err);
                this.flashMessage('error', 'Unable to delete project')
            });
    }

    // Save project to mock server
    handleSave = (project, id, name, desc, lang) => {
        name.trim();
        desc.trim();
        lang.trim();
        if (!name || !desc || !lang) {
            this.flashMessage('error', 'Fields cannot be blank');
            return;
        }

        let data = {
            name: name,
            description: desc,
            language: lang,
            id: id,
            html_url: project.html_url,
        }
        let options = {
            method: 'PUT',
            uri: `${LOCAL_API}/projects/${id.toString()}`,
            headers: { 'User-Agent': 'Request-Promise' },
            body: { id: id, userId: this.props.user.id, project: data },
            json: true
        };
        request(options)
            .then(project => {
                this.getProjects().then(projects => {
                });
                this.flashMessage('success', 'Project saved successfully');
                return project;
            })
            .catch(err => {
                console.log(err);
                this.flashMessage('error', 'Error while saving project');
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
        this.getProjects().then(projects => {
            console.log('Successful');
        });
    }

    render() {
        return (
            <Container style={{ marginBottom: '4em' }}>
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

                <SkillsList projects={this.state.projects} />
                <ProjectsList projects={this.state.projects} handleSave={this.handleSave} handleDelete={this.handleDelete} />

                <Button as={Link}
                    to={{
                        pathname: '/project/new',
                        state: { userId: this.props.user.id }
                    }}
                    color='green'
                >
                    <Icon name='plus' />
                    New Project
                </Button>
            </Container>
        );
    }
}

// List of projects
class ProjectsList extends Component {
    render() {
        let projects = this.props.projects.map(project => {
            return (
                <Project
                    key={project.id}
                    userId={project.userId}
                    id={project.id}
                    project={project.project}
                    handleSave={this.props.handleSave}
                    handleDelete={this.props.handleDelete}
                />
            );
        });

        return (
            <section>
                <Header as='h1'>Projects</Header>
                {projects}
            </section>
        );
    }
}

// Single project component
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: this.props.project.name,
            desc: this.props.project.description,
            lang: this.props.project.language
        }
    }

    handleEdit = () => {
        this.setState({ editing: true });
    }

    handleDelete = (e, id) => {
        e.preventDefault();
        this.setState({ name: '', desc: '', lang: '' });
        this.props.handleDelete(id);
    }

    handleSave = (e, project, id, name, desc, lang) => {
        e.preventDefault();
        this.props.handleSave(project, id, name, desc, lang);
        this.setState({ editing: false });
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({ editing: false })
    }

    handleNameChange = (e) => this.setState({ name: e.target.value });
    handleDescChange = (e) => this.setState({ desc: e.target.value });
    handleLangChange = (e) => this.setState({ lang: e.target.value });

    render() {
        const project = this.props.project;
        const id = this.props.id;

        let links = [];

        if (project.html_url && !project.ext_url) {
            links = [
                <p key={project.id}>
                    {project.html_url &&
                        <a href={project.html_url}><Icon name='github' />View on Github</a>
                    }
                </p>
            ];
        }
        else if (project.ext_url && !project.html_url) {
            links = [
                <p key={project.id}>
                    {project.ext_url &&
                        <a href={project.ext_url}><Icon name='linkify' />Project link</a>
                    }
                </p>
            ];
        }
        else if (project.ext_url && project.html_url) {
            links = [
                <p> key={project.id}
                    <a href={project.html_url}><Icon name='github' />View on Github</a> &nbsp; &middot; &nbsp;
                    <a href={project.ext_url}><Icon name='linkify' />Project link</a>
                </p>
            ]
        }

        // Content to display if project is not being edited
        let content = [
            <Container key={project.id}>
                <Header as='h2'>{project.name}</Header>
                {links}
                {project.description && <p>{project.description}</p>}

                <Button as={Link}
                    to={{
                        pathname: `/project/${id}`,
                        state: { project: project, userId: this.props.userId }
                    }}
                >
                    Edit
                </Button>
                <Button onClick={this.handleEdit}>Quick edit</Button>
                <DeleteButton name={project.name} id={id} handleDelete={this.props.handleDelete} />
            </Container>
        ]

        // Content to display if project is being edited
        if (this.state.editing) {
            content = [
                <Container>
                    <Form>
                        <Header as='h2'>
                            <Form.Field control={Form.Input} width='12' value={this.state.name} onChange={this.handleNameChange} />
                        </Header>
                        <Form.Field control={Form.Input} width='12' value={this.state.desc} onChange={this.handleDescChange} />
                        <Form.Field control={Form.Input} width='12' value={this.state.lang} onChange={this.handleLangChange} />
                        <Button onClick={this.handleCancel}>Cancel</Button>
                        <Button type='submit' onClick={(e) => this.handleSave(e, project, id, this.state.name, this.state.desc, this.state.lang)} primary>Save</Button>
                    </Form>
                </Container>
            ]
        }

        return (
            <Container>
                <Segment basic>
                    {content}
                </Segment>
            </Container>
        );
    }
}

// List a user's skills
class SkillsList extends Component {
    add = (array, value) => {
        if (array.indexOf(value) === -1) {
            array.push(value);
        }
    }

    render() {
        let languages = [];

        this.props.projects.map(project => {
            if (project.project.language) {
                let langs = (project.project.language).split(',')
                for (let i = 0; i < langs.length; i++) {
                    this.add(languages, langs[i].trim());
                }
            }
        });

        let skills = languages.map(skill => {
            let colour = colours.find(skill).colour;
            return <List.Item key={skill}> <Circle colour={colour} /> {skill} </List.Item>
        });

        return (
            <section style={{ border: '2px solid #eee', padding: '1.5em', marginBottom: '2.5em' }}>
                <Header as='h1'>Skills</Header>
                <List horizontal>
                    {skills}
                </List>
            </section>
        );
    }
}

// Button for prompting delete confirmation
class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    handleClick = (e, id) => {
        this.props.handleDelete(e, id);
        this.close();
    }

    render() {
        const { open } = this.state

        return (
            <div style={{ display: 'inline' }}>
                <Button color='red' onClick={this.show}>Delete</Button>

                <Modal size='tiny' dimmer='inverted' open={open} onClose={this.close}>
                    <Modal.Header>
                        Delete {this.props.name}
                    </Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want this project?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative content='No' onClick={this.close} />
                        <Button positive content='Yes' onClick={(e) => this.handleClick(this.props.id)} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default Profile