function calculateAge() {
    var input = document.getElementById("input").value;
    var birthdate = new Date(input);
    var today = new Date();
    var ageInMilliseconds = today - birthdate;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInMonths = ageInDays / 30.4;
    var ageInYears = ageInMonths / 12;
    var years = Math.floor(ageInYears);
    var months = Math.floor(ageInMonths % 12);
    var days = Math.floor(ageInDays % 30.4);
    var age = years + " Yrs, " + months + " Months, " + days + " Days";
    document.getElementById("age").innerHTML = age;
     }