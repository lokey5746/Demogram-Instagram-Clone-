import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRELxng1PWi0m3uZ9cZi3cuZJbdzRaQh0",
  authDomain: "instagram-clone-76f9b.firebaseapp.com",
  databaseURL: "https://instagram-clone-76f9b.firebaseio.com",
  projectId: "instagram-clone-76f9b",
  storageBucket: "instagram-clone-76f9b.appspot.com",
  messagingSenderId: "815460257078",
  appId: "1:815460257078:web:978806c44d1c457e92f797",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
