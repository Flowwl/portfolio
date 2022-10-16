/* eslint-disable prettier/prettier, @typescript-eslint/no-var-requires,no-undef, no-console */

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const port = process.env.REACT_APP_SERVER_PORT;
const contactEmailEnv = process.env.REACT_APP_CONTACT_EMAIL;
const contactPasswordEnv = process.env.REACT_APP_CONTACT_PASS;

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  port: 25,
  secure: false,
  auth: {
    user: contactEmailEnv,
    pass: contactPasswordEnv
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: contactEmailEnv,
    subject: `[Portfolio] Demande de contact - ${name}(${email})`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
app.listen(port, () => console.log("Server Running"));
