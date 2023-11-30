const menuButton = document.querySelector(".mob-header-button");
const menuClose = document.querySelector(".sidebar-close");
const menuContainer = document.querySelector(".sidebar-container");



menuButton.addEventListener("click", ()=>{
    menuContainer.classList.toggle("sidebar-open")
});

menuClose.addEventListener("click", ()=>{
    menuContainer.classList.remove("sidebar-open")
});



const pageNums = document.querySelectorAll(".page-link");
let currentValue = 0;

pageNums.forEach((number, numIndex) => {
    number.addEventListener("click", () => {
        event.preventDefault();
        currentValue = numIndex;
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");        
    });
});
        

function showPage(pageNumber) {
    event.preventDefault();
    // Hide all pages
    const goodsPages = document.querySelectorAll('.goods__inner');
    goodsPages.forEach(page => {
        page.classList.add('hidden');
    });

    // Show the selected page
    const selectedPage = document.getElementById('page' + pageNumber);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
    }
}


