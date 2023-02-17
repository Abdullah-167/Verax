import request from "request";
import protectAPI from "../../middleware/protectAPI";
const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

async function handler(req: any, res: any) {
  return new Promise((resolve: any) => {
    const { email, token } = req.body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    if (!token) {
      res.status(403).send({
        msg: "There was a problem with your request. Please try again later.",
      });
      resolve();
    }

    const sendMail = async () => {
      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      const contactInstance = new SibApiV3Sdk.ContactsApi();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      let createContact = new SibApiV3Sdk.CreateContact();

      createContact.email = email;
      createContact.listIds = [2];

      contactInstance.createContact(createContact).then(
        function (data: any) {
          console.log(
            "API called successfully. Returned data: " + JSON.stringify(data)
          );
        },
        function (error: any) {
          console.error(error);
        }
      );

      //   const sendEmail = async () => {
      //     sendSmtpEmail.to = [{ email: "contact@veraxworld.com" }];
      //     sendSmtpEmail.sender = {
      //       email: "contact@quantumagency.ai ",
      //       name: "Verax World",
      //     };
      //     sendSmtpEmail.htmlContent = `
      //     <p>Nouvelle addresse subscribe :</p>
      //     <p>Email : ${email}</p>
      // `;
      //     sendSmtpEmail.textContent = `Nouvelle addresse`;
      //     sendSmtpEmail.subject = `Verax World - New Contact Website`;
      //     sendSmtpEmail.replyTo = { email: "contact@quantumagency.ai " };
      //     const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
      //     console.log(result);
      //     return result;
      //   };

      //   sendEmail();

      res.status(200).json({
        data: email,
      });
      resolve();
    };

    if (req.method === "POST") {
      request(verificationUrl, (err, response, body) => {
        if (err) {
          res.status(403).send({ msg: "Unable to process request." });
          resolve();
        }

        const { success, score } = JSON.parse(body);

        if (!success || score < 0.4) {
          res.status(403).send({
            msg: "Sending failed. Robots aren't allowed here.",
            score: score,
          });
          resolve();
        } else {
          sendMail();
        }
      });
    } else {
      res.status(405).json({ message: `Method not allowed` });
      resolve();
    }
  });
}
export default protectAPI(handler);
