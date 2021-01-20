const html = (title: string, link: string, unsubscribe: string) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Blog Update</title>
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
			#code {
				width: 75%;
				margin: 0 auto;
				margin-top: 0.75em;
				margin-bottom: 0.75em;
				padding: 0.75em 1em;
				font-size: 20px;
				font-weight: 500;
				background-color: #3d3a41;
				color: #ffffff;
				border-radius: 10px;
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
				#code {
					width: 65%;
					font-size: 32px;
					padding: 0.5em 0.25em;
				}
			}
		</style>
	</head>
	<body>
		<div id="container">
			<div id="main">
				<div id="text">
					Hey there,
					<br />
					I just posted another blog post. Check it out!
				</div>
				<div id="code">${title}</div>
				<div>
					<a href="${link}">Click here to read full article ↗</a>
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
