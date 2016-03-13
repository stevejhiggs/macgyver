// hook in babel
require('babel-register')({
  "presets": [
    "es2015",
    "react"
  ]
});
require('./src/server.js');
