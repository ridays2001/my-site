import nodemailer from 'nodemailer';
import { google } from 'googleapis';

interface MailOptions {
	to: string | Array<string>;
	subject: string;
	text: string;
	html: string;
	bcc?: string | Array<string>;
}

const sendMail = ({ bcc, html, subject, text, to }: MailOptions) => {
	const id = process.env.ClientID as string;
	const secret = process.env.ClientSecret as string;
	const refToken = process.env.RefreshToken as string;
	const mail = process.env.Mail as string;

	const { OAuth2 } = google.auth;
	const client = new OAuth2({
		clientId: id,
		clientSecret: secret,
		redirectUri: 'https://developers.google.com/oauthplayground'
	});
	client.setCredentials({ refresh_token: refToken });
	const token: unknown = client.getAccessToken();

	const smtp = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: mail,
			clientId: id,
			clientSecret: secret,
			accessToken: token as string,
			refreshToken: refToken
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	void smtp.sendMail(
		{
			from: {
				name: 'Riday Shah',
				address: mail
			},
			to,
			bcc,
			replyTo: process.env.MyEmail as string,
			subject,
			text,
			html
		},
		(err, info: { accepted: Array<unknown> }) => {
			console.log(err ?? info.accepted);
			smtp.close();
		}
	);
};

export default sendMail;
