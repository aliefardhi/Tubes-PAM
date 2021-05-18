import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCyLH9wlpxKgX2G8YRc2s_pj96K-sBEwHU",
    authDomain: "tugaspam-7baf3.firebaseapp.com",
    databaseURL: "https://tugaspam-7baf3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tugaspam-7baf3",
    storageBucket: "tugaspam-7baf3.appspot.com",
    messagingSenderId: "766293767677",
    appId: "1:766293767677:web:e1c21187e71359e58f5594",
    measurementId: "G-7314YHHPXS"
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child('tasks');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;