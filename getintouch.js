// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2reGRy9WCk2ioo1W0t0FR3dInPr76_4w",
    authDomain: "laptopia-33c57.firebaseapp.com",
    projectId: "laptopia-33c57",
    storageBucket: "laptopia-33c57.firebasestorage.app",
    messagingSenderId: "943078362741",
    appId: "1:943078362741:web:d3e33dc89b523094d6723c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Add event listener for form submission
document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email'); // Fixed the ID mismatch
    var message = getElementVal('message');

    console.log(name, email, message);

    // Save the data to the database
    saveMessages(name, email, message);
}

// Function to save data to Realtime Database
function saveMessages(name, email, message) {
    const newMessageRef = ref(database, 'contactForm/' + new Date().getTime()); // Unique key for each message
    set(newMessageRef, {
        name: name,
        email: email,
        message: message
    }).then(() => {
        console.log('Data saved successfully!');
    }).catch((error) => {
        console.error('Error saving data: ', error);
    });
}

// Helper function to get element value by ID
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
