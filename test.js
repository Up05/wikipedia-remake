fetch("https://google.com", {
    "Access-Control-Allow-Origin": "*"

}).then(r => r.text()).then(t => console.log(t))
