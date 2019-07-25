import 'dotenv/config' // Load .env file
import cors from 'cors' // cors javascript security to solve domain protection
import bodyParser from 'body-parser' // convert POST to a readable payload

import express from 'express' // Serve website

import routes from './routes'
import models from './models'

console.log({
	users: models.users,
	messages: models.messages,
})

const app = express()

const port = process.env.PORT

app.use( cors() )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }) )
// ------------------- DATA --------------------------






// ------------------- MIDDLEWARE --------------------------

app.use( ( req, res, next ) => {
		/**
		 * Authentication middleware. 
		 * It would go
		 */

		req.context = {
			models,
			me: models.users[1]
		} // set user that is used to create messages
		next()
	}
)


// ---------------------- HOME -----------------------

app.get('/', (req, res) => {
	return res.send('Received a GET HTTP method')
})
app.post('/', (req, res) => {
	return res.send('Received a POST HTTP method')
})
app.put('/', (req, res) => {
	return res.send('Received a PUT HTTP method')
})
app.delete('/', (req, res) => {
	return res.send('Received a DELETE HTTP method')
})

app.use('/session', routes.session);
app.use('/users', routes.users);
app.use('/messages', routes.messages);

// --------------------- USERS ------------------------




// ----------------------- POSTED ----------------------

app.listen(port, () => console.log(`Listening on port ${port}!`))