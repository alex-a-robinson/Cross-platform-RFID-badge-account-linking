const express = require('express');
const epilogue = require('epilogue');


const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

epilogue.initialize({
  app: app,
  sequelize: sequelize
});

// Create REST resource
var scanResource = epilogue.resource({
  model: Scan,
  endpoints: ['/scans', '/scans/:id']
});

app.listen(8081, function() {
  console.log('REST server listening');
});


/* TODO
 *   - read/write from RFID
 *   - read/write from database
 *   - allow web access to database
 *   - cleanup code/cahnge
 */
