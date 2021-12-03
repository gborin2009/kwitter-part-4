var firebaseConfig = {
      apiKey: "AIzaSyBx16bERPgjl_AQ5fchI-RZlMRgn8h0qoQ",
      authDomain: "kwitter-446d6.firebaseapp.com",
      databaseURL: "https://kwitter-446d6-default-rtdb.firebaseio.com",
      projectId: "kwitter-446d6",
      storageBucket: "kwitter-446d6.appspot.com",
      messagingSenderId: "214146823166",
      appId: "1:214146823166:web:bbccaeb32f8f667fc286af"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
   room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
