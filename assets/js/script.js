var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
    for (var tablink of tablinks) {
        tablink.addEventListener("click", function(event) {
            var tabname = this.getAttribute("data-tab");
            opentab(tabname, event);
        });
    }

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function () {
            setTimeout(function () {
                form.reset();
            }, 100);
        });
    }
});
