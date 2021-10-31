// var testButton = document.createElement("BUTTON");
// testButton.innerHTML = "THIS DOES NOTHING";
// document.body.appendChild(testButton);

function addItem() {
    // var ul = document.getElementById("dynamic-list");
    // var candidate = document.getElementById("candidate");
    // var li = document.createElement("li");
    // li.setAttribute('id', candidate.value);
    // li.appendChild(document.createTextNode(candidate.value));
    // ul.appendChild(li);
    // ul.innerHTML += "<li>Item " + counter + "</li>";
    // counter++;
    
}
var addBTN = document.getElementById("addItem");
    addBTN.addEventListener("click", function(){
        //alert("did something");
        var ul = document.getElementById("dynamic-list");
        var candidate = document.getElementById("candidate");
        var li = document.createElement("li");
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        ul.appendChild(li);
    });
