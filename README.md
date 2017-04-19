# A portable cross platform soltuion to interacting with RFID
## Problem
- RFID required for many applications from entry control to ...
- Development of multiplatform solutions to utalise RFID hardware or buying specalised RFID hardware is expensive
- A simple cross platform solution is required.

This article assumes the context of a live front desk system at a musume which requires:
- Reading from RFID wristbands at the front desk
- Reading from RFID wristbands at exhibts around the musume to track them
- On a range of hardware (Rasperberry pi, windows PCs, iPads)

## Technical Implementation
### Analysis and Design
- NodeJS hardware server with API
- Client nodeJS server which interacts
- NodeJS = cross platform
### Development
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
## Appendix

