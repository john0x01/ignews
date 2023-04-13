import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

				<link rel="shortcut icon" href="/favicon.png" type="image/png" />
			</Head>
			<body className='bg-gray-900 text-white'>
				<Main />
				<NextScript />
			</body>
		</Html>
  	)
}
