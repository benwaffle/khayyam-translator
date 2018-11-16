const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.use(require('body-parser').json())
app.use(require('morgan')('dev'))

app.post('/groupme', (req, res) => {
	console.log(req.body)

	if (req.sender_type !== 'bot') {
		const translated = req.body.text
			.replace(/\bn\b/i, 'many')
			.replace(/\bmids\b/i, 'sub-par')
			.replace(/\bgas\b/i, 'nonsense')
			.replace(/\bgna\b/i, 'going to')
			.replace(/\bcooked\b/i, 'irrelevant')
			.replace(/\bsling\b/i, 'send')
			.replace(/\bdropped\b/i, 'released')
			.replace(/\bmans\b/i, 'man')
			.replace(/\bboutta\b/i, 'about to')
			.replace(/\bfite\b/i, 'fight')
			.replace(/\bhundo\b/i, 'hundred')
			.replace(/\bsesh\b/i, 'session')
			.replace(/\bmafk\b/i, 'motherfucker')
			.replace(/\bgrodie\b/i, 'gross')
			.replace(/\bfire\b/i, 'awesome')
			.replace(/\bsleeping? on\b/i, 'missing out on')
			.replace(/\bin heat\b/i, 'distraught')
			.replace(/\balfred\b/i, 'albert')
			.replace(/\bwhip\b/i, 'move')
			.replace(/\bnut\b/i, 'natural number')

		if (translated !== req.body.text) {
			setTimeout(() =>  {
				fetch('https://api.groupme.com/v3/bots/post', {
					method: 'POST',
					body: JSON.stringify({
						bot_id: '<api key>',
						text: translated
					})
				})
			}, 100)
		}
	}

	console.log('\n\n')
	res.send('ok')
})

app.listen(8080, () => console.log('running'))
