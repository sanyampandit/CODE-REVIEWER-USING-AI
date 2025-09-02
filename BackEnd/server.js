require('dotenv').config()
const app = require('./src/app')

// Use Render-provided PORT or default to 3000 for local dev
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
