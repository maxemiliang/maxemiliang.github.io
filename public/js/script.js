function updateHeader() {
    var name = document.getElementById("name").value;
    var h1 = document.getElementById("h1");

    h1.innerHTML = "Hello " + name;
}