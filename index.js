var a = setInterval(timing,1000)

function timing(params) {
    var b = new Date().toLocaleTimeString();
    document.getElementById("demo").innerHTML = b;
};
    



