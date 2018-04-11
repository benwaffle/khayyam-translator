const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.use(require('body-parser').json())
app.use(require('morgan')('dev'))

app.post('/groupme', (req, res) => {
	console.log(req.body)

	if (req.sender_type !== 'bot') {
		const translated = req.body.text
			.replace(/\bn\b/, 'many')
			.replace(/\bmids\b/, 'sub-par')
			.replace(/\bgas\b/, 'nonsense')
			.replace(/\bgna\b/, 'going to')
			.replace(/\bcooked\b/, 'fucked')

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
