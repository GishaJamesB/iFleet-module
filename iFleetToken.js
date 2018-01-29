"use strict";
var request = require('request');
var rp = require('request-promise');

class iFleetToken {
  constructor(username, password, env) {
    this.username = username;
    this.password = password;
    if(env == 'production'){
      this.opskiiUrl = 'https://opskii.com'
    }
    else{
      this.opskiiUrl = 'https://staging.opskii.com'
    }
  }

  generate(){
    var opskiiCredentials = {}
    opskiiCredentials.user = {}
    opskiiCredentials.user.username = this.username
    opskiiCredentials.user.password = this.password
    var options = {
      method: 'POST',
      uri: this.opskiiUrl + '/api/session',
      body: opskiiCredentials,
      json: true,
      resolveWithFullResponse: true
    };

    return rp(options);
    }
}

module.exports = iFleetToken;