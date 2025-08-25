document.addEventListener("DOMContentLoaded", function () {
    const contentFrame = document.getElementById("content-frame");
    const logo = document.querySelector(".logo img");

    function loadContent(url) {
        contentFrame.setAttribute("data", url);
    }

    // Ensure logo click loads main.html in the object
    logo.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent any default action
        loadContent("main.html");
    });

    const menuData = [
        {
            "name": { "en": "Home" },
            "url": "main.html",
        },
        {
            "name": { "en": "About us"},
            "url": "about us.html",
            "subcategories": [
                {
                    "name": { "en": " Vision" },
                    "url": "./sources/Vision.html",
                },
                {
                    "name": { "en": " Plant Collection" },
                    "url": "./sources/plant collection.html",
                },
                {
                    "name": { "en": "Search and Access to Specimens" },
                    "url": "./sources/Search the Database.html",
                },
                {
                    "name": { "en": "Directors / Chief Executive" },
                    "url": "./sources/Director's.html",
                }
            ]
        },
        {
            "name": { "en": "Families" },
            "url": "families.html",
            "subcategories": [
                {
                    "name": { "en": "Herbarium Checklist" },
                    "url": "./sources/Herbarium Checklist.html",
                },
                {
                    "name": { "en": "Gallery"},
                    "url": "./sources/Gallery.html",
                }
            ]
        },
        {
            "name": { "en": "Contact" },
            "url": "./sources/Contact.html",
        }
    ];

    let currentLanguage = "en";

    function buildMenu(items, parentElement) {
        items.forEach(item => {
            let menuItem = document.createElement("li");
            let menuLink = document.createElement("a");
            menuLink.textContent = item.name[currentLanguage];
            menuLink.href = "#";
            menuLink.dataset.url = item.url;

            menuItem.appendChild(menuLink);

            if (item.subcategories && item.subcategories.length > 0) {
                let subMenu = document.createElement("ul");
                buildMenu(item.subcategories, subMenu);
                menuItem.appendChild(subMenu);

                menuLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    menuItem.classList.toggle("open");
                });
            } else {
                menuLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    loadContent(item.url);
                });
            }

            parentElement.appendChild(menuItem);
        });
    }

    function updateMenu() {
        const menu = document.getElementById("menu");
        menu.innerHTML = "";
        buildMenu(menuData, menu);
    }

    updateMenu();

    document.getElementById("menu-toggle").addEventListener("click", function () {
        document.getElementById("navbar").classList.toggle("active");
    });

    document.getElementById("lang-en").addEventListener("click", function () {
        currentLanguage = "en";
        updateMenu();
    });

    document.getElementById("lang-ar").addEventListener("click", function () {
        currentLanguage = "ar";
        updateMenu();
    });
});
