var comics = [["Comic 1", "comic1"], ["Comic 2", "comic2"]]

var pages = {
    comic1: [["1", "comic1-1.png"], ["2", "comic1-2.png"], ["3", "comic1-3.png"]],
    comic2: [["1", "comic2-1.png"], ["2", "comic2-2.png"]]
}

function setup() {
    var comicSelect = document.getElementById("comic");
    
    comics.forEach(element => {
        var option = document.createElement("option");
        option.text = element[0];
        option.value = element[1];
        comicSelect.add(option);
    });

    comicSelected(document.getElementById("comic").options[0].value);

    // Check if there are input parameters
    var queryString = window.location.search;

    if (queryString != "") {
        query = queryString.substring(1).split('/');
        comic = query[0];
        page = query[1];

        comicSelect.value = comic;
        comicSelected(comic);

        var pageSelect = document.getElementById("page");
        pageSelect.value = valueFromPage(comic, page);
        pageSelected(valueFromPage(comic, page));
    }
}

function valueFromPage(comic, page) {
    for (var i = 0; i < pages[comic].length; i++) {
        if (pages[comic][i][0] == page) {
            return pages[comic][i][1];
        }
    }
}

function comicSelected(value) {
    pageList = pages[value];
    
    pageSelect = document.getElementById("page");

    for (var i = pageSelect.options.length - 1; i >= 0; i--) {
        pageSelect.remove(i);
    }

    pageList.forEach(element => {
        var option = document.createElement("option");
        option.text = element[0];
        option.value = element[1];
        pageSelect.add(option);
    });

    pageSelected(document.getElementById("page").options[0].value);
}

function pageSelected(value) {
    var comic = document.getElementById("comic").value;

    var page = "images/" + value;
    document.getElementById("display").src = page;
}

function nextPage() {
    var pageSelect = document.getElementById("page");
    var pages = [];

    for (var i = 0; i < pageSelect.options.length; i++) {
        pages.push(pageSelect.options[i].value);
    }

    var curr = pageSelect.value;
    var currIndex = pages.findIndex((element) => element == curr);

    if (currIndex < pages.length - 1) {
        var nextIndex = currIndex + 1;
        var next = pages[nextIndex];

        pageSelect.value = next;

        pageSelected(document.getElementById("page").value);
    }
}

function first() {
    var pageSelect = document.getElementById("page");

    pageSelect.value = pageSelect.options[0].value;
    pageSelected(pageSelect.options[0].value);
}

function prev() {
    var pageSelect = document.getElementById("page");

    var pages = [];

    for (var i = 0; i < pageSelect.options.length; i++) {
        pages.push(pageSelect.options[i].value);
    }

    var currIndex = pages.findIndex((element) => element == pageSelect.value);

    if (currIndex > 0) {
        var index = currIndex - 1;
    
        pageSelect.value = pageSelect.options[index].value;
        pageSelected(pageSelect.options[index].value);
    }
}

function next() {
    var pageSelect = document.getElementById("page");

    var pages = [];

    for (var i = 0; i < pageSelect.options.length; i++) {
        pages.push(pageSelect.options[i].value);
    }

    var currIndex = pages.findIndex((element) => element == pageSelect.value);

    if (currIndex < pageSelect.length - 1) {
        var index = currIndex + 1;
    
        pageSelect.value = pageSelect.options[index].value;
        pageSelected(pageSelect.options[index].value);
    }
}

function last() {
    var pageSelect = document.getElementById("page");
    var index = pageSelect.options.length - 1;
    
    pageSelect.value = pageSelect.options[index].value;
    pageSelected(pageSelect.options[index].value);
}

setup();