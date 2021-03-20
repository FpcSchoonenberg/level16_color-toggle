

// select all listitems and convert to array, so it can be used as argument for another function 
function selectListItems() {
    const listItemArray = Array.from(document.querySelectorAll('li'));
    return listItemArray;
}

//add listeners to menubutton
const addClickOnMenuButton = function () {
    const menuButton = document.querySelector('.dropdownmenu__btn').addEventListener("click", function () {
        const listItems = document.querySelector('.dropdownmenu__content').classList.toggle("show");
    })
}

//simulate :hover
// const addMouseOverMenuButton = function () {
//     const menuButton = document.querySelector('.dropdownmenu__btn').addEventListener("mouseover", function () {
//     document.querySelector('.dropdownmenu__content').classList.toggle("show");
//     })
// }

// const addMouseOutMenuButton = function () {
//     const menuButton = document.querySelector('.dropdownmenu__btn').addEventListener("mouseout", function () {
//         document.querySelector('.dropdownmenu__content').classList.toggle("show");
//     })
// }

//on click of the list-items the class-name of the list-item will be used to set the background of the body
const addClickToListItems = function (listItemArray) {
    listItemArray.forEach(listItem => {
        listItem.addEventListener("click", function () {
            const colorClass = listItem.className;
            const bodyColor = document.querySelector('body').style.backgroundColor = colorClass;
            const textColor = document.querySelector('.textwrapper').innerHTML = `Backgroundcolor: ${colorClass}`;
            const hide = document.querySelector(".dropdownmenu__content").classList.toggle("show");
        })
    })
}

// use listener for keyboard-input to change backgroundcolor
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "g") {
        const bodyColor = document.querySelector('body').style.backgroundColor = "grey";
    } else if (key === "r") {
        const bodyColor = document.querySelector('body').style.backgroundColor = "red";
    } else if (key === "o") {
        const bodyColor = document.querySelector('body').style.backgroundColor = "orange";
    }else if (key === "p") {
        const bodyColor = document.querySelector('body').style.backgroundColor = "purple";
    }else if (key === "n") {
        const bodyColor = document.querySelector('body').style.backgroundColor = "green";
    }
});

addClickToListItems(selectListItems());
addClickOnMenuButton();
//addMouseOverMenuButton();
//addMouseOutMenuButton();




