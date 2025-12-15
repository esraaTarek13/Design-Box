// Fabrics Section
const fabricsBrands = [
    {
        img: "/images/brand-7.webp",
    },
    {
        img: "/images/brand-8.webp",
    },
    {
        img: "../images/brand-9.webp",
    },
    {
        img: "../images/brand-10.webp",
    },
    {
        img: "../images/brand-12.webp",
    },
    {
        img: "../images/brand-13.webp",
    },
    {
        img: "../images/brand-14.webp",
    },
    {
        img: "../images/brand-15.webp",
    },
    {
        img: "../images/brand-25.webp",
    },
    {
        img: "../images/brand-16.webp",
    },
    {
        img: "../images/brand-17.webp",
    },
    {
        img: "../images/brand-18.webp",
    },
    {
        img: "../images/brand-19.webp",
    },
    {
        img: "../images/brand-26.webp",
    },
    {
        img: "../images/brand-27.webp",
    },
    {
        img: "../images/brand-28.webp",
    },
    {
        img: "../images/brand-29.webp",
    },
    {
        img: "../images/brand-30.webp",
    },
]

function renderFabricsBrands() {
    const fabricsContainer = document.querySelector(".fabrics-container")

    fabricsBrands.forEach((brand) => {
        fabricsContainer.innerHTML +=
            `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="brand-img">
                <img src=${brand.img} alt="Brand">
            </div>
        </div>
        `
    })
}
renderFabricsBrands()

// Furniture Section
const furnitureBrands = [
    {
        img: "../images/brand-43.webp",
    },
    {
        img: "../images/brand-22.webp",
    },
    {
        img: "../images/brand-44.webp",
    },
    {
        img: "../images/brand-45.webp",
    },
    {
        img: "../images/brand-24.webp",
    },
    {
        img: "../images/brand-46.webp",
    },
    {
        img: "../images/brand-47.webp",
    },
    {
        img: "../images/brand-48.webp",
    },
    {
        img: "../images/brand-49.webp",
    },
    {
        img: "../images/brand-50.webp",
    },
    {
        img: "../images/brand-51.webp",
    },
    {
        img: "../images/brand-52.webp",
    },
    {
        img: "../images/brand-53.webp",
    },
    {
        img: "../images/brand-54.webp",
    },
    {
        img: "../images/brand-55.webp",
    },
    {
        img: "../images/brand-5.webp",
    },
    {
        img: "../images/brand-56.webp",
    },
    {
        img: "../images/brand-57.webp",
    },
    {
        img: "../images/brand-58.webp",
    },
    {
        img: "../images/brand-59.webp",
    },
    {
        img: "../images/brand-60.webp",
    },
]

function renderFurnitureBrand() {
    const furnitureContainer = document.querySelector(".furniture-container")

    furnitureBrands.forEach((brand) => {
        furnitureContainer.innerHTML +=
            `
            <div class="col-6 col-md-4 col-lg-2">
                <div class="brand-img">
                    <img src=${brand.img} alt="Brand">
                </div>
            </div>
        `
    })
}
renderFurnitureBrand()

// Acoustics Section
const acousticsBrands = [
    {
        img: "../images/brand-1.webp",
    },
    {
        img: "../images/brand-2.webp",
    },
    {
        img: "../images/brand-33.webp",
    },
    {
        img: "../images/brand-40.webp",
    },
    {
        img: "../images/brand-41.webp",
    },
    {
        img: "../images/brand-42.webp",
    },
]

function renderAcousticsBrand() {
    const acousticsContainer = document.querySelector(".acoustics-container");

    acousticsBrands.forEach((brand) => {
        acousticsContainer.innerHTML +=
            `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="brand-img">
                <img src=${brand.img} alt="Brand">
            </div>
        </div>
        `
    })
}
renderAcousticsBrand()

// Flooring Solutions Section
const flooringSolutionsBrands = [
    {
        img: "../images/brand-14.webp",
    },
    {
        img: "../images/brand-35.webp",
    },
    {
        img: "../images/brand-36.webp",
    },
    {
        img: "../images/brand-37.webp",
    },
    {
        img: "../images/brand-38.webp",
    },
    {
        img: "../images/brand-20.webp",
    },
    {
        img: "../images/brand-39.webp",
    },
    {
        img: "../images/brand-30.webp",
    },
    {
        img: "../images/brand-25.webp",
    },
]

function renderFlooringSolutionsBrand() {
    const flooringSolutionsContainer = document.querySelector(".flooring-solutions-container");

    flooringSolutionsBrands.forEach((brand) => {
        flooringSolutionsContainer.innerHTML +=
        `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="brand-img">
                <img src=${brand.img} alt="Brand">
            </div>
        </div>
        `
    })
}
renderFlooringSolutionsBrand()

// Wallcovering Section
const wallcoveringBrands = [
    {
        img: "../images/brand-32.webp",
    },
    {
        img: "../images/brand-8.webp",
    },
    {
        img: "../images/brand-9.webp",
    },
    {
        img: "../images/brand-33.webp",
    },
    {
        img: "../images/brand-34.webp",
    },
    {
        img: "../images/brand-17.webp",
    },
    {
        img: "../images/brand-19.webp",
    },
    {
        img: "../images/brand-25.webp",
    },
]

function renderWallcoveringBrand() {
    const wallcoveringContainer = document.querySelector(".wallcovering-container");

    wallcoveringBrands.forEach((brand) => {
        wallcoveringContainer.innerHTML +=
        `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="brand-img">
                <img src=${brand.img} alt="Brand">
            </div>
        </div>
        `
    })
}
renderWallcoveringBrand()

// Decor Section
const decorBrands = [
    {
        img: "../images/brand-5.webp",
    },
    {
        img: "../images/brand-3.webp",
    },
    {
        img: "../images/brand-6.webp",
    },
    {
        img: "../images/brand-4.webp",
    },
]

function renderDecorBrand() {
    const decorContainer = document.querySelector(".decor-container");

    decorBrands.forEach((brand) => {
        decorContainer.innerHTML += 
        `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="brand-img">
                <img src=${brand.img} alt="Brand">
            </div>
        </div>
        `
    })
}
renderDecorBrand()

// Lighting Section
const lightingBrands = [
    {
        img: "../images/brand-21.webp",
    },
    {
        img: "../images/brand-31.webp",
    },
]

function renderLightingBrand() {
    const lightingContainer = document.querySelector(".lighting-container");

    lightingBrands.forEach((brand) => {
        lightingContainer.innerHTML +=
        `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="brand-img">
                <img src=${brand.img} alt="Brand">
            </div>
        </div>
        `
    })
}
renderLightingBrand()
