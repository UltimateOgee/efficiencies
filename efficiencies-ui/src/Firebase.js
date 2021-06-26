import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAgcEnJzVuKthqlkwmaqUM0I_-0xmix_S4",
    authDomain: "efficiencies-e21b3.firebaseapp.com",
    databaseURL: "",
    projectId: "efficiencies-e21b3",
    storageBucket: "efficiencies-e21b3.appspot.com",
    messagingSenderId: ""
};
firebase.initializeApp(config);

export default firebase;