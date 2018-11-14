'use strict'

var test = require('tape')
var nock = require('nock')
var me = require('./')

test('offline', function (t) {
  t.plan(1)

  var strava = nock('https://www.strava.com', {
    reqheaders: {
      authorization: 'Bearer token',
      accept: 'application/json',
      'accept-encoding': 'gzip, deflate'
    }
  })

  strava
    .get('/api/v3/athlete')
    .reply(200, {
      id: 123
    })

  me({ accessToken: 'token' }, function (err, data) {
    if (err) return t.end(err)
    t.deepEqual(data, { id: 123 })
  })

  nock.restore()
})

var accessToken = process.env.STRAVA_ACCESS_TOKEN

if (accessToken) {
  test('online', function (t) {
    t.plan(1)

    me({ accessToken }, function (err, data) {
      if (err) return t.end(err)
      t.equal(data.firstname, 'Ben')
    })
  })
}
