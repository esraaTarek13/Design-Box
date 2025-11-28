// Brands Section
const brandsImg = [
    {
        Image: "../images/brand-61.webp",
    },
    {
        Image: "../images/brand-62.webp",
    },
    {
        Image: "../images/brand-63.webp",
    },
    {
        Image: "../images/brand-64.webp",
    },
    {
        Image: "../images/brand-65.webp",
    },
    {
        Image: "../images/brand-66.webp",
    },
    {
        Image: "../images/brand-67.webp",
    },
    {
        Image: "../images/brand-68.webp",
    },
    {
        Image: "../images/brand-69.webp",
    },
    {
        Image: "../images/brand-70.webp",
    },
    {
        Image: "../images/brand-71.webp",
    },
    {
        Image: "../images/brand-72.webp",
    },
]

function renderBrands() {
    const brandsContainer = document.querySelector(".brands-container");

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

// Projects Section
const projects = [
    {
        img: "../images/project-1.webp",
        title: "Casa Arcos del Sol - Senderos",
    },
    {
        img: "../images/project-2.webp",
        title: "W Costa Rica Resort – Playa Conchal",
    },
    {
        img: "../images/project-3.webp",
        title: "Waldorf Astoria Punta Cacique",
    },
    {
        img: "../images/project-4.webp",
        title: "Vista Celestial",
    },
    {
        img: "../images/project-5.webp",
        title: "Hyatt Centric San José Escazú",
    },
    {
        img: "../images/project-6.webp",
        title: "Hotel Rio Perdido",
    },
    {
        img: "../images/project-7.webp",
        title: "El Mangroove Hotel",
    },
    {
        img: "../images/project-8.webp",
        title: "Hyatt Regency Panamá",
    },
    {
        img: "../images/project-9.webp",
        title: "Courtyard Barbados",
    },
    {
        img: "../images/project-10.webp",
        title: "Hotel Residence Inn Ave. Escazu",
    },
    {
        img: "../images/project-11.webp",
        title: "Magna Médica",
    },
    {
        img: "../images/project-12.webp",
        title: "Courtyard Alajuela",
    },
    {
        img: "../images/project-13.webp",
        title: "Hotel Courtyard Hermosillo Mexico",
    },
    {
        img: "../images/project-14.webp",
        title: "Hotel Tabacón",
    },
    {
        img: "../images/project-15.webp",
        title: "Hotel El Silencio Lodge",
    },
    {
        img: "../images/project-16.webp",
        title: "Hospital Metropolitano",
    },
    {
        img: "../images/project-17.webp",
        title: "PF Chang's Aleste",
    },
    {
        img: "../images/project-18.webp",
        title: "Hotel Fairfield El Salvador",
    },
]

function renderProjects() {
    const projectsContainer = document.querySelector(".projects-container");

    projects.forEach((project) => {
        projectsContainer.innerHTML +=
        `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="project w-100">
                <div class="project-img w-100">
                    <img src=${project.img} alt="projects">
                </div>
                <p>${project.title}</p>
            </div>
        </div>
        `
    })
}
renderProjects()