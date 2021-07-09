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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    objectToAdd.forEach(obj => {
        const newRef = collectionRef.doc();

        batch.set(newRef, obj)
    })

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            id : doc.id,
            routeName : encodeURI(title.toLowerCase()),
            title,
            items
        }
    })

    return transformedCollections.reduce((accumilator, collection) => {
        accumilator[collection.title.toLowerCase()] = collection;
        return accumilator;
    }, {})
}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const checkUserAuthentication = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged( userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}
// Give access to new GoogleAuthProvider 
// class for authentication library
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// We want to always trigger google pop-up
// whenever we use GoogleAuthProvider for
// authentication and sign-in
googleProvider.setCustomParameters({ prompt : 'select_account' }); 

// Sign in with pop-up takes provider class that
// we made but it takes it for many different types
// of popups we just want the google one
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); 
                                                                                                                  
export default firebase; 