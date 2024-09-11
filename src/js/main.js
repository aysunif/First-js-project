
let movies = [
    {
        img: "../image/Rectangle 108.png",
        name: "The Dry 2"
    },
    {
        img: "../image/Rectangle 106.png",
        name: "Trigger Warning"
    },
    {
        img: "../image/Rectangle 110.png",
        name: "The Dry"
    },
    {
        img: "../image/Rectangle 112.png",
        name: "Clanes"
    },
    {
        img: "../image/Rectangle 114.png",
        name: "Interstellar"
    },
    {
        img: "../image/Rectangle 116.png",
        name: "The Beekeeper"
    }
]

let writer = ""
movies.forEach(function (m) {
    writer += `
    <div class="card swiper-slide">
        <div class="inner">
            <div class="image">
                <img src="${m.img}" alt="">
            </div>
            <div class="name">${m.name}</div>
        </div>
    </div>
  `
});

let div = document.querySelector(".cards");
div.innerHTML= writer;

var swiper = new Swiper(".slide-container", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });