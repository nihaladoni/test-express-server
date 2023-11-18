const express = require('express')
const cors = require('cors')

const app = express()

// Enable CORS for all routes
app.use(cors())

// Define your routes
app.get('/', (req, res) => {
  res.send(`<h1>Hello, this is your Express server!</h1>`)
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
