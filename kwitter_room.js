const firebaseConfig = {
    apiKey: "AIzaSyCS96yqNTwRqBySyHfaE2tSvuop5u3Ex6U",
    authDomain: "twitter-dee9b.firebaseapp.com",
    databaseURL: "https://twitter-dee9b-default-rtdb.firebaseio.com",
    projectId: "twitter-dee9b",
    storageBucket: "twitter-dee9b.appspot.com",
    messagingSenderId: "870843439844",
    appId: "1:870843439844:web:f7f97f2772ece3a557aaf1"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
    getData();

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser(){
      user_name = document.getElementById("user_name").value ;
      firebase.database().ref("/").child(user_name).update({
          purpose:"addUser" 
      });
  }
    