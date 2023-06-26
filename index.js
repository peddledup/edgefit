  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYSQ5DsDUl_bLGMw6pb0__sn4Gy5OY324",
  authDomain: "edgefit-19f67.firebaseapp.com",
  databaseURL: "https://edgefit-19f67-default-rtdb.firebaseio.com",
  projectId: "edgefit-19f67",
  storageBucket: "edgefit-19f67.appspot.com",
  messagingSenderId: "1088160789722",
  appId: "1:1088160789722:web:3416dc3b18c4ce728461e3",
  measurementId: "G-L4S6VG1QNG"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();
  const ref = db.ref("newsletter");

  const form = document.getElementById("newsletter");
  form.addEventListener("submit",(e)=>{

      const email = document.getElementById("email-newsletter").value;

      ref.push({
          email:email,
      });
      alert("Thanks for showing your   interest we will get back to you soon!")
    });





    
    function selectData() {
        firebase
          .database()
          .ref("newsletter")
          .once("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
              var email = childSnapshot.val().email;
              addItemToTableOfCareer(email);
            });
          });
      }
      var sNo_career = 0;
        function addItemToTableOfCareer(email){
              
              var tbody = document.getElementById("tbody");
              var trow = document.createElement("tr");
              var td1 = document.createElement("td");
              var td2 = document.createElement("td");
              td1.innerHTML = ++sNo_career;
              td2.innerHTML = email;
              
              trow.appendChild(td1);
              trow.appendChild(td2);
              tbody.appendChild(trow);
        }