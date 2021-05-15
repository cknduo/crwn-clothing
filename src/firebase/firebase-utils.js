import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDxaC-iK-Z-CprcQ4QDsZ_c2cZhd69h1Do",
    authDomain: "crwn-db-260be.firebaseapp.com",
    projectId: "crwn-db-260be",
    storageBucket: "crwn-db-260be.appspot.com",
    messagingSenderId: "804578429578",
    appId: "1:804578429578:web:a56c80dc77a948309dfb73",
    measurementId: "G-Q76ZV899BP"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase