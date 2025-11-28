const brandsImg = [
    {
        Image: "../images/brand-1.webp",
    },
    {
        Image: "../images/brand-2.webp",
    },
    {
        Image: "../images/brand-3.webp",
    },
    {
        Image: "../images/brand-4.webp",
    },
    {
        Image: "../images/brand-5.webp",
    },
    {
        Image: "../images/brand-6.webp",
    },
    {
        Image: "../images/brand-7.webp",
    },
    {
        Image: "../images/brand-8.webp",
    },
    {
        Image: "../images/brand-9.webp",
    },
    {
        Image: "../images/brand-10.webp",
    },
    {
        Image: "../images/brand-11.webp",
    },
    {
        Image: "../images/brand-12.webp",
    },
    {
        Image: "../images/brand-13.webp",
    },
    {
        Image: "../images/brand-14.webp",
    },
    {
        Image: "../images/brand-15.webp",
    },
    {
        Image: "../images/brand-16.webp",
    },
    {
        Image: "../images/brand-17.webp",
    },
    {
        Image: "../images/brand-18.webp",
    },
    {
        Image: "../images/brand-19.webp",
    },
    {
        Image: "../images/brand-20.webp",
    },
    {
        Image: "../images/brand-21.webp",
    },
    {
        Image: "../images/brand-22.webp",
    },
    {
        Image: "../images/brand-23.webp",
    },
    {
        Image: "../images/brand-24.webp",
    },
]

function renderBrands() {
    const brandsContainer = document.querySelector(".brands-container")

    brandsImg.forEach((brand) => {
        brandsContainer.innerHTML +=
            `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="brand-img">
                <img src=${brand.Image} alt="brand">
            </div>
        </div>
        `
    });
}
renderBrands()


const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



