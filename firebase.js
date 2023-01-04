import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD1eQ7Y8mOIVGAVrOIxr7RPRVnfAlITIk",
  authDomain: "uber-eats-clone-372819.firebaseapp.com",
  projectId: "uber-eats-clone-372819",
  storageBucket: "uber-eats-clone-372819.appspot.com",
  messagingSenderId: "149576127078",
  appId: "1:149576127078:web:f1d2b829156a28157553a7",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
