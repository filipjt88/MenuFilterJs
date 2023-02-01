let menu = [
    {
        id:1,
        title: "Pancakes",
        category: "breakfast",
        img: "./img/item-1.jpeg",
        price: 11.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    },
    {
        id:2,
        title: "Chicken burger",
        category: "lunch",
        img: "./img/item-2.jpeg",
        price: 5.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    },
    {
        id:3,
        title: "Omelet",
        category: "breakfast",
        img: "./img/item-3.jpeg",
        price: 3.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    },
    {
        id:4,
        title: "Burger",
        category: "dinner",
        img: "./img/item-4.jpeg",
        price: 6.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    },
    {
        id:5,
        title: "Plazma shake",
        category: "shakes",
        img: "./img/item-5.jpeg",
        price: 2.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    },
    {
        id:6,
        title: "Cheeseburger",
        category: "lunch",
        img: "./img/item-6.jpeg",
        price: 4.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    },
    {
        id:7,
        title: "Hamburger",
        category: "dinner",
        img: "./img/item-7.jpeg",
        price: 6.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    },
    {
        id:8,
        title: "Biftek",
        category: "lunch",
        img: "./img/item-8.jpeg",
        price: 12.99,
        descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro praesentium soluta alias sed in."
    }
];


let menuItem = document.querySelector("#menuItem");
let filterBtn   = document.querySelectorAll(".filter-btn");



filterBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let category = e.currentTarget.dataset.id;
        let menuCategory = menu.filter((item) => {
            if(item.category === category) {
                return item;
            }
        });
        if(category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});


window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
});


function displayMenuItems(item) {
    let displayMenu = item.map((item) => {
        return `<div class="col-md-5 offset-1">
        <div class="menu">
            <div class="menu-img">
                <img src="${item.img}" class="img-fluid" alt="img">
            </div>
            <div class="menu-heading">
                <span>${item.title}<strong> $${item.price}</strong></span>
                <div class="menu-descriptions">
                    <p>${item.descriptions}</p>
                </div>
            </div>
        </div>
    </div>`;
    });
    displayMenu = displayMenu.join("");
    menuItem.innerHTML = displayMenu;
}


