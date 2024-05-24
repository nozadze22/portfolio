const carousell = document.querySelector(".carousell");
const arrowBtns =  document.querySelectorAll(".wraper i");
const firstCardWith =  carousell.querySelector(".cards").offsetWith;



let isDragging = false, startX, stratScrolLeft;
arrowBtns.forEach(btn =>  {
    btn.addEventListener("click", () => {
    carousell.scrollLeft = btn.id === "arrowOne"? -firstCardWith : firstCardWith;
    });
});
const dragstrat = (e) => {
    isDragging = true;
    carousell.classList.add("dragging");
    startX = e.pageX;
    stratScrolLeft = carousell.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousell.scrollLeft = stratScrolLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false ;
    carousell.classList.remove("dragging");
}
carousell.addEventListener("mousedown", dragstrat);
carousell.addEventListener("mousemove", dragging);  // მაუსის ევენთები
document.addEventListener("mouseup", dragStop);






