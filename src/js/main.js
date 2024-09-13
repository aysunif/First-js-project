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
    },
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
]

let writer = ""
movies.forEach(function (m) {
    writer += `
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

let div = document.querySelector(".card-wrapper");
div.innerHTML= writer;



    var swiper1 = new Swiper(".slide-container", {
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

  let movies2 = [
        {
            img: "../image/Rectangle 128.png",
            name: "The Exorcism"
        },
        {
            img: "../image/Rectangle 123.png",
            name: "TWD: Daryl Dixon"
        },
        {
            img: "../image/Rectangle 138.png",
            name: "Me Before You"
        },
        {
            img: "../image/Rectangle 124.png",
            name: "Dreamin Wild"
        },
        {
            img: "../image/Rectangle 125.png",
            name: "Double Blind"
        },
        {
            img: "../image/Rectangle 127.png",
            name: "Joker: Double"
        },
        {
            img: "../image/Rectangle 128.png",
            name: "The Exorcism"
        },
        {
            img: "../image/Rectangle 123.png",
            name: "TWD: Daryl Dixon"
        },
        {
            img: "../image/Rectangle 138.png",
            name: "Me Before You"
        },
        {
            img: "../image/Rectangle 124.png",
            name: "Dreamin Wild"
        },
        {
            img: "../image/Rectangle 125.png",
            name: "Double Blind"
        },
        
    ]
    
    let writer2 = ""
    movies2.forEach(function (m) {
        writer2 += `
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
    
    let div2 = document.querySelector(".card-wrapper2");
    div2.innerHTML= writer2;
    
    
    
        var swiper2 = new Swiper(".slide-container", {
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


          let movies3 = [
            {
                img: "../image/Rectangle 140.png",
                name: "Nowhere"
            },
            {
                img: "../image/Rectangle 135.png",
                name: "Damsel"
            },
            {
                img: "../image/Rectangle 126.png",
                name: "Prison Break"
            },
            {
                img: "../image/Rectangle 136.png",
                name: "My Fault"
            },
            {
                img: "../image/Rectangle 137.png",
                name: "Road House"
            },
            {
                img: "../image/Rectangle 139.png",
                name: "IT"
            },
            {
                img: "../image/Rectangle 140.png",
                name: "Nowhere"
            },
            {
                img: "../image/Rectangle 135.png",
                name: "Damsel"
            },
            {
                img: "../image/Rectangle 126.png",
                name: "Prison Break"
            },
            {
                img: "../image/Rectangle 136.png",
                name: "My Fault"
            },
            {
                img: "../image/Rectangle 137.png",
                name: "Road House"
            },
            
        ]
        
        let writer3 = ""
        movies3.forEach(function (m) {
            writer3 += `
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
        
        let div3 = document.querySelector(".card-wrapper3");
        div3.innerHTML= writer3;
        
        
        
            var swiper3 = new Swiper(".slide-container", {
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

         let movies4 = [
                {
                    img: "../image/Frame 527.png",
                    name: "Murder Mystery 2"
                },
                {
                    img: "../image/Rectangle 190.png",
                    name: "Alive"
                },
                {
                    img: "../image/Rectangle 186.png",
                    name: "TWD: Fear"
                },
                {
                    img: "../image/Rectangle 192.png",
                    name: "Breaking Bad"
                },
                {
                    img: "../image/Rectangle 188.png",
                    name: "MR: The Death Cure"
                },
                {
                    img: "../image/Rectangle 194.png",
                    name: "World War Z"
                },
                {
                    img: "../image/Frame 527.png",
                    name: "Murder Mystery 2"
                },
                {
                    img: "../image/Rectangle 190.png",
                    name: "Alive"
                },
                {
                    img: "../image/Rectangle 186.png",
                    name: "TWD: Fear"
                },
                {
                    img: "../image/Rectangle 192.png",
                    name: "Breaking Bad"
                },
                {
                    img: "../image/Rectangle 188.png",
                    name: "MR: The Death Cure"
                },
                
            ]
            
         let writer4 = ""
            movies4.forEach(function (m) {
                writer4 += `
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
            
          let div4 = document.querySelector(".card-wrapper4");
            div4.innerHTML= writer4;
            
            
            
                var swiper4 = new Swiper(".slide-container", {
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
                  let movies5 = [
                    {
                        img: "../image/Frame 528.png",
                        name: "Anyone but You"
                    },
                    {
                        img: "../image/Rectangle 191.png",
                        name: "Teen Wolf"
                    },
                    {
                        img: "../image/Rectangle 187.png",
                        name: "Top Gun Maverick"
                    },
                    {
                        img: "../image/Rectangle 193.png",
                        name: "Old Boy"
                    },
                    {
                        img: "../image/Rectangle 189.png",
                        name: "Troy"
                    },
                    {
                        img: "../image/Rectangle 195.png",
                        name: "The Others"
                    },
                    {
                        img: "../image/Frame 528.png",
                        name: "Anyone but You"
                    },
                    {
                        img: "../image/Rectangle 191.png",
                        name: "Teen Wolf"
                    },
                    {
                        img: "../image/Rectangle 187.png",
                        name: "Top Gun Maverick"
                    },
                    {
                        img: "../image/Rectangle 193.png",
                        name: "Old Boy"
                    },
                    {
                        img: "../image/Rectangle 189.png",
                        name: "Troy"
                    },
                    
                ]
                
             let writer5 = ""
                movies5.forEach(function (m) {
                    writer5 += `
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
                
              let div5 = document.querySelector(".card-wrapper5");
                div5.innerHTML= writer5;
                
                
                
                    var swiper5 = new Swiper(".slide-container", {
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