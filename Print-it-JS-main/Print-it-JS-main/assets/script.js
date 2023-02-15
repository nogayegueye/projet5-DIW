const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlide = 0;
const banner = document.getElementById("banner");
const bannerImg = document.querySelector(".banner-img");
const tagLine = banner.querySelector("p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

updateBanner();

arrowLeft.addEventListener("click", () => {
   currentSlide--;
   if (currentSlide < 0) {
      currentSlide = slides.length - 1;
   }
   updateBanner();
});

arrowRight.addEventListener("click", () => {
   currentSlide++;
   if (currentSlide === slides.length) {
      currentSlide = 0;
   }
   updateBanner();
});

function updateBanner() {
   bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
   tagLine.innerHTML = slides[currentSlide].tagLine;
   updateDots();
}

function updateDots() {
   dotsContainer.innerHTML = "";
   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === currentSlide) {
         dot.classList.add("dot_selected");
      }
      dotsContainer.appendChild(dot);
   }
}