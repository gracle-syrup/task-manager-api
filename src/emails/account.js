const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "vizeversize@gmail.com",
		subject: "Thanks for joining in",
		text: `Welcome to the app, ${name}. Let me know how you get along iwth the app.`,
	});
};

const sendCancellationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "vizeversize@gmail.com",
		subject: "Sorry to see you go!",
		text: `Goodbye ${name}, Please tell us how to improve`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancellationEmail,
};
