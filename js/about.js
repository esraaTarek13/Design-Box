const teamMembers = [
    {
        img: "../images/DIRECTOR_CO-FOUNDER.webp",
        title: "Melvin Leiva",
        JobDescription: "DIRECTOR CO-FOUNDER",
    },
    {
        img: "../images/SHOWROOM_MANAGER.webp",
        title: "Ximena Barrios",
        JobDescription: "SHOWROOM MANAGER",
    },
    {
        img: "../images/DESIGN_LEAD.webp",
        title: "Mónica Ramirez",
        JobDescription: "DESIGN LEAD",
    },
    {
        img: "../images/SHOWROOM_ASSISTANT.webp",
        title: "Eyleen Jimenez",
        JobDescription: "SHOWROOM ASSISTANT",
    },
    {
        img: "../images/Acoustic_Project_Specialist.webp",
        title: "Laura Galindo",
        JobDescription: "Acoustic Project Specialist",
    },
    {
        img: "../images/ADMINISTRATION.webp",
        title: "Karol Madrigal",
        JobDescription: "ADMINISTRATION",
    },
    {
        img: "../images/PROCUREMENT&LOGISTICS_COORDINATOR.webp",
        title: "Gabriela Perez",
        JobDescription: "PROCUREMENT & LOGISTICS COORDINATOR",
    },
    {
        img: "../images/Cost_Analyst.webp",
        title: "MWinston Wu",
        JobDescription: "Cost Analyst",
    },
    {
        img: "../images/ACCOUNTING.webp",
        title: "Winnie Duarte",
        JobDescription: "ACCOUNTING",
    },
    {
        img: "../images/WAREHOUSE.webp",
        title: "Jossie Fuentes",
        JobDescription: "WAREHOUSE",
    },
]

function renderTeamMembers() {
    const teamMembersContainer = document.querySelector(".team-imgs");
    teamMembers.forEach((member) => {
        teamMembersContainer.innerHTML +=
        `
        <div class="team-img-box">
            <div class="team-img">
                <img src=${member.img} alt="Team Img">
            </div>
            <h4 class="pt-4">${member.title}</h4>
            <p>${member.JobDescription}</p>
        </div>
        `
    })
}
renderTeamMembers()