alert("Test")
fetch("google.com").then(r => r.text()).then(t => console.log(t))
