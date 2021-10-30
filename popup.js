// var testButton = document.createElement("BUTTON");
// testButton.innerHTML = "THIS DOES NOTHING";
// document.body.appendChild(testButton);

//<script>
var counter= 4;

function addelement() {
    var completelist = document.getElementById("thelist");

    completelist.innerHTML += "<li>Item " + counter + "</li>";
    counter++;
}
//</script>