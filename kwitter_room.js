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
    document.getElementById ("user_name").innerHTML="you have successfully been admitted in our system "+user_name
    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
         }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToRoomname(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}