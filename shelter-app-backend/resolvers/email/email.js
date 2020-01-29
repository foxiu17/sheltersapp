const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: async args => {
    console.log("ARGS: ", args);

    const htmlEmail = `
        <h3>Contact details</h3>
        <ul>
          <li>from: ${args.userEmail} </li>
        </ul>
        <h3>Message:</h3>
        <p>${args.message}</p>
      `;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      // streamTransport: true,
      // newline: "windows",
      jsonTransport: true,
      auth: {
        user: "orin53@ethereal.email",
        pass: "A8qnrY1cQMZjDPYYwY"
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    const emailInfo = {
      from: args.userEmail,
      to: args.shelterEmail,
      subject: args.subject,
      text: args.message,
      html: htmlEmail
    };

    return await transporter
      .sendMail(emailInfo)
      .then(result => {
        console.log("RESULT: ", result);
        console.log("MESSAGE: ", result.message);
        return { done: true };
      })
      .catch(error => {
        console.log(error);
        return { done: false };
      });
  }
};
