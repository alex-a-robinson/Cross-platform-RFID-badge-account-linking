const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
    console.log('client connected');
});

const Sequelize = require('sequelize');

var sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',

  // SQLite only
  storage: 'database.sqlite'
});

var Scan = sequelize.define('scan', {
  rfid: {
    type: Sequelize.STRING
  }
});

function rfidScanned(rfid) {
  console.log('RFID: ' + rfid + ' scanned');
  wss.broadcast(rfid);
+ Scan.create({rfid: rfid});
}
