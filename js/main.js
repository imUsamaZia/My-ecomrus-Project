// for slider
const loadSlider = function () {
    const sliderImage = document.querySelector('.slider-images');
    const sliderWidth = sliderImage.firstElementChild.clientWidth; 
    let counter = 0;
  
    const nextSlider = function () {
      if (counter < sliderImage.children.length - 1) {
        counter++;
           sliderImage.style.transition = 'transform 0.5s ease-in-out';
  
        sliderImage.style.transform = `translateX(${-sliderWidth * counter}px)`;
      }
    };
    const previousSlider = function () {
      if (counter > 0) {
        counter--;
        sliderImage.style.transition = 'transform 0.5s ease-in-out';
        sliderImage.style.transform = `translateX(${-sliderWidth * counter}px)`;
      }
    };
  
    nextSlider();
    document.querySelector('.slider-right-arrow').addEventListener('click', nextSlider);
    document.querySelector('.slider-left-arrow').addEventListener('click', previousSlider);
  };
  
  loadSlider();

  // code for product section
  const btnPrimary = document.querySelectorAll('.btn-primary');
  const plateImgHeading = document.querySelectorAll('.plate-img-heading');
  const mainGrid = document.querySelectorAll('.grid1');

  btnPrimary.forEach((btn, index) => {
      let showText = false;

      btn.addEventListener('click', () => {
          if (showText) {
              plateImgHeading[index].style.display = 'block';
              mainGrid[index].removeChild(mainGrid[index].firstChild);
          } else {
              plateImgHeading[index].style.display = 'none';
              const creatPrice = document.createElement('div');
              creatPrice.innerHTML = `
                  <h1>Thanks for your purchase</h1>
                  <div style="font-size: 2rem; text-align: center;">😊</div>`;
              creatPrice.style.color = 'white';
              creatPrice.style.fontSize = '1.5rem';

              mainGrid[index].prepend(creatPrice);
          }

          showText = !showText;
      });
  });
  

// for testymonial slider

const testymonial = document.querySelectorAll('.testymonial1');
let counter = 0;

testymonial.forEach((card, index) => {
  card.style.left = `${index * 25}%`;
});

const moveForward = function () {
  counter++;
  slideCard();
};

const moveBackward = function () {
  counter--;
  slideCard();
};

const slideCard = function () {
  testymonial.forEach((card, index) => {
    card.style.transform = `translateX(-${counter * 100}%)`; 
  });
};
