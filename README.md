# Cross platform RFID badge account linking
## Problem
RFID badges are often used for identificaiton in entry control systems, at an events badges are handed out linked with a persons ID at registration. This registartion process often uses either a computer or tablet. For a tablet to read RFID requires custom hardware. A simple cross platform solution which allows both computers and tablets to interface with the same hardware is required.

**Requiremens**
- Read/Write from registration system to RFID wristband
- Interface with RFID scanner on a range of hardware (Rasperberry Pi, Windows PC, iPad, etc.)
- Cross platform registration interface
- Ability to watch multiple scanners?

## Technical Implementation
### Analysis and Design
This solution proposes a client server model, the server interfaces directly with the hardware and allows a client to interface via an API. This apporch is benifiical as:
- Allows incompatible hardware (e.g. iPad and RFID scanner) to interact
- ???

It is important to:
- Keep latency low in order to make useable
- ???

We propose useing nodeJS as our server. This is beacuse nodeJS is a cross platform solution meaning the hardware server can run on many types of machines. ???.

We will use a DATABASE database backend to store and queue scans.

We will use express as a simple nodeJS web platform. And Websockets!

### Development
Our basic API:
- read
- write

Firstly our server, we use websockets and broadcast whenever a rfid is scanned.
```Javascript
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

// TODO ws.onmessage?

wss.on('connection', function connection(ws) {
    console.log('client connected');
});

function rfidScanned(rfid) {
  console.log('RFID: ' + rfid + ' scanned');
  wss.broadcast(rfid);
}
```

An example client:
```Javascript
<!doctype html>

<html lang="en">
<head>
  <script type="text/javascript">
    var ws = new WebSocket("ws://localhost:8080/");

    ws.onmessage = function(e) {
        // Receives a message.
        alert(e.data);
    };
  </script>
</head>

<body>
</body>
</html>
```


- RFID server API
- Queue scan results to database
- Client server read results from database when required
- Allow multiple clients to talk to scanner
### Verificationi
### Deployment
- Security?
- 
## Limitations and alternatives
- Allow writing as well, requires that only one client can connect/write at a single time (notify other clients on connection)
- Increases latency due to network traffic
- Allow client ID switching e.g. currently done in config
- Still require a raspberry pi or some other type of hardware to use as the server host when using an iPad
## Appendix

