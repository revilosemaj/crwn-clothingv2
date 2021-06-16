import firebase from 'firebase/app'
import 'firebase/firestore'; //Database
import 'firebase/auth'; //Authentication

const config = {
    apiKey: "AIzaSyBvctARzeVT_N6drW6vI75Pw9gZQFWBHaQ",
    authDomain: "crown-clothingv2.firebaseapp.com",
    projectId: "crown-clothingv2",
    storageBucket: "crown-clothingv2.appspot.com",
    messagingSenderId: "500133753061",
    appId: "1:500133753061:web:50880156522c543c89a40c",
    measurementId: "G-J66T3Q5CGL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error.message)
        }
    }

    return userRef;
}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Give access to new GoogleAuthProvider 
// class for authentication library
const provider = new firebase.auth.GoogleAuthProvider();

// We want to always trigger google pop-up
// whenever we use GoogleAuthProvider for
// authentication and sign-in
provider.setCustomParameters({ prompt : 'select_account' }); 

// Sign in with pop-up takes provider class that
// we made but it takes it for many different types
// of popups we just want the google one
export const signInWithGoogle = () => auth.signInWithPopup(provider); 
                                                                                                                  
export default firebase; 