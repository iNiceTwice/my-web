const nodemailer = require("nodemailer") 
const {gmail_user, gmail_pass} = require("../../../keys")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: gmail_user, // generated ethereal user
      pass: gmail_pass, // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log("- Emails Ready -")
  })

module.exports = transporter