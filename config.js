import 'firebase/auth';
import firebase from 'firebase';
import 'firebase/firestore';

let config = {
    // firebasecreds
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
firebase.firestore();
export default firebase;