//DOM Elements
const  boxes = document.querySelectorAll('.box');
const  image = document.querySelector('.image');

//Loop through each boxes element
boxes.forEach(element => {
    //When a draggable element is dragged over a box
    element.addEventListener("dragover", e =>{
        e.preventDefault() // Prevent default behavior
        //console.log("dragging")
        element.classList.add("hovered")
    })

    //When a draggable element leaves a box element
    element.addEventListener("dragleave", () =>{
        element.classList.remove("hovered")
    })

    //When a draggable element is dropped on a box element
    element.addEventListener("drop", () =>{
        element.appendChild(image);
    })
});