console.clear()
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m", {
    method : "GET",
    headers: { "Access-Control-Allow-Origin": "*" }

}).then(r => r.text()).then(t => console.log(t))
