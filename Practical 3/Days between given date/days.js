function calculateDifference() {
    var start = new Date(document.getElementById("start").value);
    var end = new Date(document.getElementById("end").value);
    var timeDiff = end - start;
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    document.getElementById("difference").innerHTML = diffDays + " Days";
     }