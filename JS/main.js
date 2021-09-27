//  I've got a button via its ID, I hang an event on it when the user clicks on this button text displayed

document.getElementById("btn").onclick = function () {
    let a = "JS the best";
    let text = document.getElementById("text").innerHTML += "<br>" + a;
    document.write(text);
}