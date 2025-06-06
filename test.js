alert("Test")
fetch("https://google.com").then(r => r.text()).then(t => console.log(t))
