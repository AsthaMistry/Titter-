// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDABUduh3IzJnoqkJrJrZDcLAQDCCoe-qo",
  authDomain: "fir-for-project-edecf.firebaseapp.com",
  databaseURL: "https://fir-for-project-edecf-default-rtdb.firebaseio.com",
  projectId: "fir-for-project-edecf",
  storageBucket: "fir-for-project-edecf.appspot.com",
  messagingSenderId: "838758301968",
  appId: "1:838758301968:web:973b11997aec16bea0e595"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function add_user(){

    user_name = document.getElementById("user_name").value;

    window.location = "Titter_room.html"
}