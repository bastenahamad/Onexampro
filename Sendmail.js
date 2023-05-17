const mailid = "";
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: mailid,
      Password: "Enter your password",
      To: localStorage.getItem("email"),
      From: mailid,
      Subject: "Your test result",
      Body: "You scored " + localStorage.getItem("score") + "out of 10",
    })
      .then(function (message) {
        console.log("mail sent successfully")
      });
  }