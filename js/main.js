const pillsList = document.getElementById('pills-list');
const tabContent = document.getElementById('tabContent');

let currentItem = tabContent.children[0];
let currntPill = pillsList.children[0];

pillsList.addEventListener('click', onPillsListClick);

function onPillsListClick(event) {
   const targetPill = event.target;

   if(!targetPill.dataset.id) {
        return;
    }

    const targetItem = document.getElementById(targetPill.dataset.id);

    toggleClass(currentItem);
    toggleClass(currntPill);

    currntPill = targetPill;
    currentItem = targetItem;
    
    toggleClass(targetItem);
    toggleClass(targetPill);
}

function toggleClass(element) {
    element.classList.toggle('active');
}