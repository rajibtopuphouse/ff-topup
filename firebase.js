// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdaid7-zwzrnPRGwt0qAVbduWm0spx3zw",
  authDomain: "rajib-top-up-house-49a2b.firebaseapp.com",
  projectId: "rajib-top-up-house-49a2b",
  storageBucket: "rajib-top-up-house-49a2b.firebasestorage.app",
  messagingSenderId: "530922776563",
  appId: "1:530922776563:web:14c175ce6c779a940a9486"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
