const html = (name: string, message: string) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Contact Form Confirmation</title>
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
			hr {
				margin-top: 2em;
				border: 1.5px solid #3d3a41;
				background-color: #3d3a41;
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
					Hello ${name}!
					<br />
					Your contact form has been received. You can now sit back and relax while I read and reply to it.
					<hr />
					For reference, here is the message I received:
					<br />
					${message}
				</div>
			</div>
		</div>
	</body>
</html>
`;

export default html;
