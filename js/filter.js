const buttonsList = document.querySelector('.js-tags')
console.log(buttonsList)
let selectedTag = null;

buttonsList.addEventListener('click', onButtonsListClick)

function onButtonsListClick(e) {

    if (e.target.nodeName !== 'BUTTON') {
        return
    }

    const currentActiveBtn = document.querySelector('.tags__btn--active')
    // if (currentActiveBtn) {
    //     currentActiveBtn.classList.toggle('tags__btn--active')
   
    // }
  const nextActiveBtn = e.target;
    if (currentActiveBtn === nextActiveBtn) {
        currentActiveBtn.classList.toggle('tags__btn--active')
    }
  
    
    nextActiveBtn.classList.toggle('tags__btn--active')
    selectedTag = nextActiveBtn.dataset.value;
    console.log(selectedTag)
}


const date = new Date();
console.log(date.getDay())

console.log(date.getMonth())

console.log( date.getFullYear())



const dateNow = Date.now();
console.log(dateNow)