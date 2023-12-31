// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv').config()

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs')

hbs.registerHelper('ifequal', function (lvalue, rvalue, options) {
	if (arguments.length < 3) throw new Error('Handlebars Helper equal needs 2 parameters')
	if (lvalue != rvalue) {
		return options.inverse(this)
	} else {
		return options.fn(this)
	}
})

hbs.registerHelper('ifnotequal', function (lvalue, rvalue, options) {
	if (arguments.length < 3) throw new Error('Handlebars Helper equal needs 2 parameters')
	if (lvalue == rvalue) {
		return options.inverse(this)
	} else {
		return options.fn(this)
	}
})

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app)

// default value for title local
const capitalize = require('./utils/capitalize')
const projectName = 'SO FRESH SO CLEAN'

app.locals.appTitle = `${projectName}`

// 👇 Start handling routes here
const indexRoutes = require('./routes/index.routes')
app.use('/', indexRoutes)

// User route
app.use('/', require('./routes/user.routes'))
app.use('/', require('./routes/flat.routes'))
app.use('/', require('./routes/task.routes'))

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
