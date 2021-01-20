const html = (name: string, unsubscribe: string) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Added To Mailing List</title>
		<style>
			body {
				font-size: 16px;
			}
			#container {
				background-color: #fc8eac;
				background: url('https://i.ibb.co/8xnWhLD/color-splash.jpg');
				background-repeat: no-repeat;
				background-size: cover;
				padding-top: 3em;
				padding-bottom: 4em;
			}
			#main {
				text-align: center;
				background-color: #f3f3f9;
				width: 80%;
				margin: 0 auto;
				margin-top: 3.5em;
				margin-bottom: 3em;
				padding: 2em 1.5em;
				border-radius: 21px;
			}
			#text {
				width: 85%;
				margin: 0 auto;
			}
			#unsubscribe {
				color: #ff0000;
			}
			@media screen and (min-width: 768px) {
				body {
					font-size: 24px;
				}
				#main {
					width: 60%;
					margin-top: 5em;
				}
				#text {
					width: 65%;
				}
			}
		</style>
	</head>
	<body>
		<div id="container">
			<div id="main">
				<div id="text">
					Hello ${name},
					<br />
					You have been subscribed to my mailing list. If you have second thoughts, you can unsubscribe using
					the link below. If you don't remember subscribing for the list, then please reply to this email and
					I'll look into the matter.
				</div>
				<div>
					<br />
					<br />
					<a href="${unsubscribe}" id="unsubscribe">Click here to unsubscribe ↗</a>
				</div>
			</div>
		</div>
	</body>
</html>
`;

export default html;
