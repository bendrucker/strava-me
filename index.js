'use strict'

var assert = require('assert')
var get = require('simple-get')

module.exports = me

function me (options, callback) {
  assert(options && options.accessToken)

  var request = {
    url: 'https://www.strava.com/api/v3/athlete',
    headers: {
      authorization: ['Bearer', options.accessToken].join(' ')
    },
    json: true
  }

  get.concat(request, function (err, res, data) {
    if (err) return callback(err)
    callback(null, data)
  })
}
