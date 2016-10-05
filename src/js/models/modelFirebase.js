// Initialize Firebase
var config = {
    apiKey: "AIzaSyBG6RABAtYE_59MiD9j2-L_Z4C5i3rJOZY",
    authDomain: "otl-react.firebaseapp.com",
    databaseURL: "https://otl-react.firebaseio.com",
    storageBucket: "otl-react.appspot.com",
    messagingSenderId: "531210504974"
  };
  firebase.initializeApp(config);

  // Writing data to DB
  function writeUserData(
      id,
      no, 
      summary, 
      description, 
      option, component, 
      category, 
      prio, 
      responsive, 
      state, 
      costModel, 
      affectsVersion, 
      issueTicket, 
      ticketText, 
      notes, 
      inSprint, 
      updatedAt, 
      createdAt, 
      client) {
  firebase.database().ref('otlReact/' + id).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// OTL table columns:
// --> id, no, summary, description, option, component, category, prio, responsive, state, costModel, affectsVersion, issueTicket, ticketText, notes, inSprint, updatedAt, client