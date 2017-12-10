import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import firebase, { auth } from './config/firebase.js';
import { Grid, Container } from 'semantic-ui-react'

import Bio from './components/Bio';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProject from './pages/EditProject';
import NewProject from './pages/NewProject';
import NewInterest from './pages/NewInterest';
import Dashboard from './pages/Dashboard';
import PublicUsers from './pages/PublicUsers';
import PublicProfile from './pages/PublicProfile';

class App extends Component {
    // Main application state
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            id: ''
        }
    }

    // Persist auth state
    componentWillMount() {
        auth.onAuthStateChanged(res => {
            if (res) {
                let user = localStorage.getItem(res.providerData[0].uid)

                if (user) {
                    this.setState({ id: JSON.parse(user).id, user: JSON.parse(user) });
                }
            }
        });
    }

    // Update user information and save to local storage
    setUser = (id, user) => {
        localStorage.setItem(id, JSON.stringify(user));
        this.setState({ id: id, user: user })
    }

    render() {
        return (
            <BrowserRouter>
                <section style={{ paddingBottom: '6em' }}>
                    <PrimaryLayout user={this.state.user} setUser={this.setUser} />
                </section>
            </BrowserRouter>
        )
    }
}

class PrimaryLayout extends Component {
    render() {
        return (
            <div>
                <Navbar setUser={this.props.setUser} user={this.props.user} />
                <Switch>
                    <Route path="/" exact render={(props) =>
                        this.props.user ?
                            <Dashboard setUser={this.props.setUser} user={this.props.user} />
                            :
                            <Home user={this.props.user} setUser={this.props.setUser} />
                    } />
                    <Route path="/users" component={PublicUsers} />
                    <Route path="/profile/:id" component={PublicProfile} />
                    <Layout path="/profile" user={this.props.user} editing={true} component={Profile} />
                    <Route path="/project/new" component={NewProject} />
                    <Layout path="/project/:id" user={this.props.user} component={EditProject} />
                    <Route path="/interest/new" component={NewInterest} />
                    <Redirect to="/" />
                </Switch>

            </div>
        );
    }
}

// Redirect to Home page if user is not logged in
const Layout = ({ user, editing, component: Component, ...rest }) => (
    user ? (
        <Container style={{ width: '70%', margin: '0 auto' }}>
            <Grid>
                <Grid.Column width={4}>
                    <Bio editing={editing} user={user} />
                </Grid.Column>

                <Grid.Column width={12}>
                    <Route {...rest} render={props => (
                        <Component {...props} user={user} />
                    )} />
                </Grid.Column>
            </Grid>
        </Container>
    )
        :
        (
            <Redirect to={{
                pathname: '/'
            }} />
        )
)

// Redirect to Home page if user is not logged in
const PrivateRoute = ({ user, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        user ? (
            <Component {...props} user={user} />
        )
            :
            (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            )
    )} />
)

export default App;