
const bedrock = require('bedrock-protocol')



const client = bedrock.createClient({
    host: 'survivalwmehmet.aternos.me',  // the host to bind to, use '0.0.0.0' to bind all hosts
    port: 41780,        // optional, port to bind to, default 19132
    username: 'Notch2',   // Any profile name, only used internally for account caching when in online mode. In offline mode, the username to connect with.
    offline: true
})


