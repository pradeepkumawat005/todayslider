const Slides = document.querySelectorAll('.slide');
const Preveous = document.querySelector('.left');
const Next = document.querySelector('.right');
const image_list = document.querySelectorAll('.image-item');




let counter = 0;


Next.addEventListener('click', () => { 
    const scrollbar = document.querySelector('.wrapper').scrollLeft +=40;
    takborder();
    if (counter < Slides.length){
        Slides.forEach((image, index) => {
            image.style.transform = `translateX(-${counter * 100}%)`;  
        });
        counter++;
        scrollbar;
    }else {
        Next.style.visibility = "hidden";
        
    }
});


Preveous.addEventListener('click', () => {
    const scrollbar = document.querySelector('.wrapper').scrollLeft -=40;
    if (counter <= Slides.length) {
        Slides.forEach((image, index) => {
            image.style.transform = `translateX(-${(counter-2) * 100}%)`;
        });
        counter--;
        scrollbar;
    }
    takborderprev();
  
});

image_list.forEach((image) => {
    image.addEventListener('click', (e) => {
        image_list.forEach((img) => {
            img.style.border = 'none';
        });
        e.target.style.border= '2px solid white';      
    });
});

function setImage(index) {
    Slides.forEach((image, i) => {
        if (i === index) {
            image.style.transform = `translateX(${-i * 100}%)`;
            image.style.transition = "0.2s";
            
        } else {
            image.style.transform = `translateX(0)`;
            image.style.transition = "0.2s";
        }

       
    });
}

// border function
const takborder = () => {
    image_list.forEach((image, index) => {
        image.style.border = 'none';
    });
    const selectedImageIndex = Math.abs(counter) % image_list.length;
    image_list[selectedImageIndex].style.border = '4px solid white';
};


const takborderprev = () => {
    image_list.forEach((image, index) => {
        image.style.border = 'none';
    });
    let previousIndex = (Math.abs(counter) - 1 + image_list.length) % image_list.length;

    image_list[previousIndex].style.border = '4px solid white';
   
};