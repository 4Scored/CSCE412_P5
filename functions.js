function load_style() {
    let page_style = document.getElementById("page_style").getAttribute("href");
    if (page_style === "style_one.css") {
        localStorage.setItem("page_stylesheet_name", "style_two.css");
        apply_style();
    } else {
        localStorage.setItem("page_stylesheet_name", "style_one.css");
        apply_style();
    }    
}

function apply_style() {
    let sheet = localStorage.getItem("page_stylesheet_name");
    if (sheet) {
        document.getElementById("page_style").setAttribute("href", sheet);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    apply_style();
});