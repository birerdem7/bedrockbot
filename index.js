
const express = require('express')
const app = express()
const port = 3000
const bedrock = require('bedrock-protocol')


app.get('/', (req, res) => {
  res.send('Hello World!')
  const client = bedrock.createClient({
    host: 'survivalwmehmet.aternos.me',  // the host to bind to, use '0.0.0.0' to bind all hosts
    port: 41780,        // optional, port to bind to, default 19132
    username: 'Notch2',   // Any profile name, only used internally for account caching when in online mode. In offline mode, the username to connect with.
    offline: true
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
