let mylistMovies1 = [
    {
        img: "../image/Rectangle 300.png",
        name: "Fancy Dance"
    },
    {
        img: "../image/Rectangle 301.png",
        name: "La Pasion Turca"
    },
    {
        img: "../image/Rectangle 302.png",
        name: "Legado Huesos"
    },
    {
        img: "../image/Rectangle 303.png",
        name: "Yellowstone"
    },
    {
        img: "../image/Rectangle 304.png",
        name: "Hotel Cocaine"
    },
    {
        img: "../image/Rectangle 305.png",
        name: "Lord Of Rings"
    },
    {
        img: "../image/Rectangle 300.png",
        name: "Fancy Dance"
    },
    {
        img: "../image/Rectangle 301.png",
        name: "La Pasion Turca"
    },
    {
        img: "../image/Rectangle 302.png",
        name: "Legado Huesos"
    },
    {
        img: "../image/Rectangle 303.png",
        name: "Yellowstone"
    },
    {
        img: "../image/Rectangle 304.png",
        name: "Hotel Cocaine"
    }
]

let mylistWriter1 = ""
mylistMovies1.forEach(function (m) {
    mylistWriter1 += `
    <div class="swiper-slide card">
        <div class="inner">
            <div class="image">
                <img src="${m.img}" alt="">
            </div>
            <div class="name">${m.name}</div>
        </div>
    </div>
  `
});

let divlist = document.querySelector(".mylist-card-wrapper1");
divlist.innerHTML=  mylistWriter1;



    var mylistSwiper1 = new Swiper(".slide-container", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });

    //   2

    let mylistMovies2 = [
        {
            img: "../image/Rectangle 117.png",
            name: "Musica"
        },
        {
            img: "../image/Rectangle 120.png",
            name: "Little Woods"
        },
        {
            img: "../image/Rectangle 118.png",
            name: "Irena’s Vow"
        },
        {
            img: "../image/Rectangle 121.png",
            name: "Franklin"
        },
        {
            img: "../image/Rectangle 119.png",
            name: "Jagged Mind"
        },
        {
            img: "../image/Rectangle 122.png",
            name: "Ride On"
        },
        {
            img: "../image/Rectangle 117.png",
            name: "Musica"
        },
        {
            img: "../image/Rectangle 120.png",
            name: "Little Woods"
        },
        {
            img: "../image/Rectangle 118.png",
            name: "Irena’s Vow"
        },
        {
            img: "../image/Rectangle 121.png",
            name: "Franklin"
        },
        {
            img: "../image/Rectangle 119.png",
            name: "Jagged Mind"
        },
        
        
    ]
    
    let mylistWriter2 = ""
    mylistMovies2.forEach(function (m) {
        mylistWriter2 += `
        <div class="swiper-slide card">
            <div class="inner">
                <div class="image">
                    <img src="${m.img}" alt="">
                </div>
                <div class="name">${m.name}</div>
            </div>
        </div>
      `
    });
    
    let divlist2= document.querySelector(".mylist-card-wrapper2");
    divlist2.innerHTML=  mylistWriter2;
    
    
    
        var mylistSwiper2 = new Swiper(".slide-container", {
            slidesPerView: "auto",
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
          });

        //   3

        let mylistMovies3 = [
            {
                img: "../image/Rectangle 69.png",
                name: "Superman"
            },
            {
                img: "../image/Rectangle 71.png",
                name: "Batman"
            },
            {
                img: "../image/Rectangle 78.png",
                name: "Kung Fu Panda"
            },
            {
                img: "../image/Rectangle 79.png",
                name: "The Chipmunks 2"
            },
            {
                img: "../image/Rectangle 76.png",
                name: "Madagascar 2"
            },
            {
                img: "../image/Rectangle 306.png",
                name: "Tom & Jerry"
            },
            {
                img: "../image/Rectangle 69.png",
                name: "Superman"
            },
            {
                img: "../image/Rectangle 71.png",
                name: "Batman"
            },
            {
                img: "../image/Rectangle 78.png",
                name: "Kung Fu Panda"
            },
            {
                img: "../image/Rectangle 79.png",
                name: "The Chipmunks 2"
            },
            {
                img: "../image/Rectangle 76.png",
                name: "Madagascar 2"
            },
        ]
        
        let mylistWriter3 = ""
        mylistMovies3.forEach(function (m) {
            mylistWriter3 += `
            <div class="swiper-slide card">
                <div class="inner">
                    <div class="image">
                        <img src="${m.img}" alt="">
                    </div>
                    <div class="name">${m.name}</div>
                </div>
            </div>
          `
        });
        
        let divlist3 = document.querySelector(".mylist-card-wrapper3");
        divlist3.innerHTML=  mylistWriter3;
        
        
        
            var mylistSwiper3 = new Swiper(".slide-container", {
                slidesPerView: "auto",
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
              });


        // 4

        let mylistMovies4 = [
            {
                img: "../image/Rectangle 129.png",
                name: "Flight 666"
            },
            {
                img: "../image/Rectangle 132.png",
                name: "Madness Within"
            },
            {
                img: "../image/Rectangle 130.png",
                name: "Coup"
            },
            {
                img: "../image/Rectangle 133.png",
                name: "Bad Blood"
            },
            {
                img: "../image/Rectangle 131.png",
                name: "Lamour Forets"
            },
            {
                img: "../image/Rectangle 134.png",
                name: "Presumed Innocent"
            },
            {
                img: "../image/Rectangle 129.png",
                name: "Flight 666"
            },
            {
                img: "../image/Rectangle 132.png",
                name: "Madness Within"
            },
            {
                img: "../image/Rectangle 130.png",
                name: "Coup"
            },
            {
                img: "../image/Rectangle 133.png",
                name: "Bad Blood"
            },
            {
                img: "../image/Rectangle 131.png",
                name: "Lamour Forets"
            }
        ]
        
        let mylistWriter4 = ""
        mylistMovies4.forEach(function (m) {
            mylistWriter4 += `
            <div class="swiper-slide card">
                <div class="inner">
                    <div class="image">
                        <img src="${m.img}" alt="">
                    </div>
                    <div class="name">${m.name}</div>
                </div>
            </div>
          `
        });
        
        let divlist4 = document.querySelector(".mylist-card-wrapper4");
        divlist4.innerHTML=  mylistWriter4;
        
        
        
            var mylistSwiper4 = new Swiper(".slide-container", {
                slidesPerView: "auto",
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
              });


    // 5

    let mylistMovies5 = [
        {
            img: "../image/Rectangle 307.png",
            name: "Butcher’s Crossing"
        },
        {
            img: "../image/Rectangle 308.png",
            name: "Rebel Moon"
        },
        {
            img: "../image/Rectangle 309.png",
            name: "Venom"
        },
        {
            img: "../image/Rectangle 400.png",
            name: "Paper Lives"
        },
        {
            img: "../image/Rectangle 401.png",
            name: "Morbius"
        },
        {
            img: "../image/Rectangle 402.png",
            name: "Fury"
        },
        {
            img: "../image/Rectangle 307.png",
            name: "Butcher’s Crossing"
        },
        {
            img: "../image/Rectangle 308.png",
            name: "Rebel Moon"
        },
        {
            img: "../image/Rectangle 309.png",
            name: "Venom"
        },
        {
            img: "../image/Rectangle 400.png",
            name: "Paper Lives"
        },
        {
            img: "../image/Rectangle 401.png",
            name: "Morbius"
        }
    ]
    
    let mylistWriter5 = ""
    mylistMovies5.forEach(function (m) {
        mylistWriter5 += `
        <div class="swiper-slide card">
            <div class="inner">
                <div class="image">
                    <img src="${m.img}" alt="">
                </div>
                <div class="name">${m.name}</div>
            </div>
        </div>
      `
    });
    
    let divlist5 = document.querySelector(".mylist-card-wrapper5");
    divlist5.innerHTML=  mylistWriter5;
    
    
    
        var mylistSwiper5 = new Swiper(".slide-container", {
            slidesPerView: "auto",
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
          });