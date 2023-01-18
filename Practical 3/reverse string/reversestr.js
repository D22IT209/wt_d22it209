function reverseString() {
    var input = document.getElementById("input").value;
    var reversed = input.split("").reverse().join("");
    document.getElementById("reversed").innerHTML = reversed;
    }
    