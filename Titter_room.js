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


user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function addRoom(){
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding_room_name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "Titter_page.html";
      }

      function getData(){
      
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-" + Room_names);

       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
       
      });
      });
      }

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Titter_page.html";
}
