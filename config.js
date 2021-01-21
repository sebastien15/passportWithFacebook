import dotenv from 'dotenv'

module.exports = {
	'facebookAuth': {
		'clientID':  process.env.CLIENT_ID, // your App ID
		'clientSecret':  process.env.CLIENT_SECRET, // your App Secret
		'callbackURL':  'http://localhost:5000/auth/facebook/callback'
	}
}
