const slideShowSection = document.querySelector('.slide-show-area img');

const imageObArray = [
  {
    image: 'IMG-20220401-WA0026.jpg'
  },
  {
    image: 'lowerdeckwithsmoke.jpeg'
  },
  {
    image: 'WhatsApp Image 2022-03-14 at 22.35.19 (1).jpeg'
  },
  {
    image: 'top-deck.jpeg'
  },
  {
    image:'IMG-20220401-WA0025.jpg'
  },
  
  {
    image: 'IMG-20220401-WA0027.jpg'
  },
  {
    image: 'IMG-20220401-WA0028.jpg'
  },
  {
    image: 'IMG-20220401-WA0029.jpg'
  },
  {
    image: 'IMG-20220401-WA0030.jpg'
  },
  {
    image: 'IMG-20220401-WA0031.jpg'
  },
  {
    image: 'IMG-20220401-WA0032.jpg'
  },
  {
    image: 'IMG-20220401-WA0033.jpg'
  },
  {
    image: 'IMG-20220401-WA0034.jpg'
  },
  {
    image: 'IMG-20220401-WA0035.jpg'
  }
  
]


let count = 0;

const slideShow = () => {
  
  if(count >= imageObArray.length){
    count = 0;
  }
  slideShowSection.src  = `./images/${imageObArray[count].image}`; 
  count++;
  setTimeout(slideShow,2000);
}
setTimeout(slideShow,2000);