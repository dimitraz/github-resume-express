import { API_KEY } from './env';
import firebase from 'firebase';

const config = {
    apiKey: API_KEY,
    authDomain: "github-resume-8d4f6.firebaseapp.com",
    databaseURL: "https://github-resume-8d4f6.firebaseio.com",
    projectId: "github-resume-8d4f6",
    storageBucket: "github-resume-8d4f6.appspot.com",
    messagingSenderId: "717875105645"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();
export default firebase;