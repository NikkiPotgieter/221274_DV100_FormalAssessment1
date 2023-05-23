function registerAccount() {
    var name = document.getElementById("exampleInputName1").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var number = document.getElementById("exampleInputNumber1").value;
    var checkbox = document.getElementById("exampleCheck1").checked;
  
    if (checkbox) {
      alert(
        'Welcome ' + name + '! Thank you for your interest in ' + subject + '! We will contact you via the email provided: ' + email + ', or alternatively on the phone number: ' + number + '.'
      );
    } else {
      alert(
        "Well, well, well... why don\'t you want to sign up for our newsletter... you don\'t seem to be that interested " + name + "! If you want to sign up, you better CHECK that newsletter box!"
      );
    }
  }
  