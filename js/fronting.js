async function submit() {
    var id = document.getElementById("systemID").value;
    if (id == "") {
        id = "lunoy";
    }

    loading();

    var response = await fetch("https://api.pluralkit.me/v2/systems/" + id + "/switches?limit=1");
    var switchObj = await response.json();

    var memberid = switchObj[0]['members'][0];
    load(memberid);
}

function loading() {
    var image = document.getElementById("image");
    image.src = "icons/loading.png";
    image.style.borderColor = "white";

    document.getElementById("name").innerText = "Loading...";
    document.getElementById("pronouns").innerText = "Loading...";
    document.getElementById("description").innerText = "Loading...";
}

async function load(id) {
    var response = await fetch("https://api.pluralkit.me/v2/members/" + id);
    var memberObj = await response.json();

    var image = document.getElementById("image");

    if (memberObj['avatar_url'] == null) {
        image.src = "../images/placeholder.png";
    }
    else {
        image.src = memberObj['avatar_url'];
    }
    
    console.log(memberObj['avatar_url']);

    image.style.borderColor = "#" + memberObj['color'];

    document.getElementById("name").innerText = memberObj['name'];
    document.getElementById("pronouns").innerText = memberObj['pronouns'];
    document.getElementById("description").innerText = memberObj['description'];
}