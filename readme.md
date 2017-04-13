# strava-me [![Build Status](https://travis-ci.org/bendrucker/strava-me.svg?branch=master)](https://travis-ci.org/bendrucker/strava-me)

> Get the current user via the Strava API


## Install

```
$ npm install --save strava-me
```


## Usage

```js
var me = require('strava-me')

me({accessToken}, function (err, data) {
  if (err) throw err
  console.log('Hi', data.firstname)
})
```

## API

#### `stravaMe(options, callback)` -> `undefined`

##### options

###### accessToken

*Required*  
Type: `string`

A Stava API access token.

##### callback

*Required*  
Type: `function`  
Arguments: `err, data`


## License

MIT © [Ben Drucker](http://bendrucker.me)
