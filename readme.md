#iFleet

 This module is based on the documentation here `http://api-docs.opskii.com/`

## Generate Token

```
var iFleetToken = require('ifleet/iFleetToken')
const credentials = {"username": "username", "password": "password", "env": "staging"}
let token = new iFleetToken(credentials.username, credentials.password, credentials.env)

function main() {
  return token.generate();
}

main().then(function(result) {
  console.log(result.headers.authorization);
});

```