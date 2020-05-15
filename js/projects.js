const education = document.querySelector('#personal-projects');
let MOBILE_DIM = {
    w: "250px",
    h: "400px"
}
let WEB_DIM = {
    w: "600px",
    h: "300px"
}
let txt = "follow the project on my github"
let projects = [

    {
        name: "be the hero",
        url: "https://github.com/brunogeek9/be-the-hero",
        languages: "expo, react-native, node-js and axios.",
        print: {
            file: "/images/tela1.png",
            h: WEB_DIM.h,
            w: WEB_DIM.w
        },
        description: "Created within omiweak 11 with the aim of training knowledge while connecting people and ONGs."
    },
    {
        name: "task manager",
        languages: "PHP with cakephp",
        url: "https://github.com/brunogeek9/task_manager",
        print: {
            file: "/images/tela2.png",
            h: WEB_DIM.h,
            w: WEB_DIM.w
        },
        description: "Task manager web app implemented with cakephp."
    },
    {
        name: "Hackernews",
        languages: "",
        url: "https://github.com/brunogeek9/hackernews-clone",
        print: {
            file: "/images/tela5.png",
            h: WEB_DIM.h,
            w: WEB_DIM.w
        },
        description: "Simple clone of hackernews implemented for learning purposes."
    },
    {
        name: "weather bot",
        url: "https://github.com/brunogeek9/weather-bot",
        languages: "JS",
        print: {
            file: "/images/tela3.jpg",
            h: MOBILE_DIM.h,
            w: MOBILE_DIM.w
        },
        description: "bot for telegram implemented js and openweathermap API."
    },
    {
        name: "Gitfoot",
        url: "https://github.com/brunojamelli/GitfootOlheiro",
        languages: "Firebase, google maps api and android native api.",
        print: {
            file: "/images/tela4.png",
            h: MOBILE_DIM.h,
            w: MOBILE_DIM.w
        },
        description: "Application to help football players and scouts meet."
    },

]
console.log(projects);
const addInDoom = async() => {
    const header = `<h2 class="mb-5">Projects</h2>`;
    const reposTemplate = projects.map(({ name, description, url, languages, print }) =>
        `
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">${name}</h3>
                        <div class="subheading mb-3"> 
                            <span class="text-primary">
                                ${description}
                            </span>
                        </div>
                        <a href="${url}" target="_black">
                        <img src="${print.file}" class="img-fluid" width= ${print.w} height= ${print.h}>
                        </a>
                        <div class="subheading mb-3"> 
                            <span >
                                <a class="text-secondary" href="${url}" target="_black">${txt}</a> 
                            </span>
                        </div>
                    </div>
                </div>
                <div class="border-top "></div>

        `).join('')
    console.log(reposTemplate);
    const content = header + reposTemplate;
    education.innerHTML += content;
}

addInDoom();