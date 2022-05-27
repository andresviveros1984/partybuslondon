const slideShowSection = document.querySelector('.slide-show-area img');

const imageObArray = [
  {
    image: 'lady-with-drink.jpeg'
  },
  {
    image: 'lowerdeckwithsmoke.jpeg'
  },
  {
    image: 'top-deck.jpeg'
  }
]


let count = 0;

const slideShow = () => {
  
  if(count >= 3){
    count = 0;
  }
  slideShowSection.src  = `./images/${imageObArray[count].image}`; 
  count++;
  setTimeout(slideShow,2000);
}
setTimeout(slideShow,2000);