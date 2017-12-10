import React, { Component } from 'react';
import { LOCAL_API } from '../config/config';
import request from 'request-promise';
import colours from '../api/colours_api';
import Bio from '../components/Bio';
import Circle from '../components/Circle';
import { Container, Grid, Segment, Icon, Header, List } from 'semantic-ui-react'

// Profile page 
class PublicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        let options = {
            uri: `${LOCAL_API}/users/${this.props.location.state.user.id}/projects/`,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true
        };

        return request(options)
            .then(projects => {
                this.setState({ projects: projects });
                return projects;
            });
    }

    render() {
        const user = this.props.location.state.user;

        return (
            <Container style={{ width: '70%', margin: '0 auto' }}>
                <Grid>
                    <Grid.Column width={4}>
                        <Bio user={user} />
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <SkillsList projects={this.state.projects} />
                        <ProjectsList projects={this.state.projects} />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

// List of projects
class ProjectsList extends Component {
    render() {
        let projects = this.props.projects.map(project => {
            return <Project key={project.id} userId={project.userId} project={project.project} />
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
    render() {
        const project = this.props.project;
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
                <p key={project.id}>
                    <a href={project.html_url}><Icon name='github' />View on Github</a> &nbsp; &middot; &nbsp;
                            <a href={project.ext_url}><Icon name='linkify' />Project link</a>
                </p>
            ]
        }

        return (
            <Segment basic>
                <Header as='h2'>{this.props.project.name}</Header>
                {links}
                <p>{project.description}</p>
            </Segment>
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

export default PublicProfile