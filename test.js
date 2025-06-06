console.clear()
fetch("https://google.com", {
    method : "GET",
    headers: { "Access-Control-Allow-Origin": "*" }

}).then(r => r.text()).then(t => console.log(t))
