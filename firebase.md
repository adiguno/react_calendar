`npm install firebase`

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCPoyrhscO17J8s_r4mtkEhl0bUIORaz3w",
authDomain: "adiguno-life-calendar.firebaseapp.com",
projectId: "adiguno-life-calendar",
storageBucket: "adiguno-life-calendar.appspot.com",
messagingSenderId: "1097027799379",
appId: "1:1097027799379:web:c892827db7df312602b9a6",
measurementId: "G-HTM1LT6HFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

- enable cloud firestore api
- added new app credentials
- the Cloud Firestore API is not available for Datastore Mode projects
- Cloud Firestore in Native mode
