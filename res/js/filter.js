// DECLARATION
const filterA = document.querySelectorAll(".filter-container a");
const items = document.querySelectorAll(".container .item");

// EVENTS
for (let i = 0; i < filterA.length; i++) {
    filterA[i].onclick = function() {
        removeActive();
        this.classList.add("active");
        let filter = this.getAttribute("data-value");
        
        // check if contains selected filter
        for (let i = 0; i < items.length; i++) {
            
            if (!(items[i].classList.contains(filter))) {
                items[i].style.display = "none";
            } else {
                items[i].style.display = "flex";
            }
            
        }
        
    }
}

// FUNCTIONS
function removeActive() {
    for (let i = 0; i < filterA.length; i++) {
        filterA[i].classList.remove("active");
    }
}