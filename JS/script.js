window.onload = function() {
    document.getElementById("menu").onclick = function() {
        var x = document.getElementById('myTopnav');
    
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
};