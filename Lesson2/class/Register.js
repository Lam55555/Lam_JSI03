const firebaseConfig = {
    apiKey: "AIzaSyAubRn2su0pC9WCq7Ny129altx2blwRDe0",
    authDomain: "lam-jsi.firebaseapp.com",
    projectId: "lam-jsi",
    storageBucket: "lam-jsi.appspot.com",
    messagingSenderId: "669380706665",
    appId: "1:669380706665:web:bd69dd6298571732abfdf8",
    measurementId: "G-16N5V3PNQ1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth();
  function signUp(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email,pass)
    .then((userCredential)=>{
        const user = userCredential.user;
        showUserInfo(user);
    })

    .catch((error)=>{
        console.error("Error signin up", error.message);
    });
}
