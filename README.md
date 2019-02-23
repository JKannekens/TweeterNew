# XSS example for Security 2

Extremely simple example of an XSS attack. This case is used to see security analysis and protocols working in practice. 

### Installing and Running

Install with npm
```
npm install
```

Start two servers: the server hosting the page and a malicious server.
```
node server/server.js
node attacker/eve.js
json-server --watch db.json --port 3004
