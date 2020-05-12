const education = document.querySelector('#personal-projects');
let MOBILE_DIM = {
    w: "250px",
    h: "400px"
}
let WEB_DIM = {
    w: "700px",
    h: "400px"
}
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
        description: "project created within omiweak 11 with the aim of training knowledge while connecting people and ONGs in my region."
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
        description: "Task manager web app implemented with cakephp + mysql + bootstrap 4. "
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
        description: "bot for the telegram implemented in nodejs with the node-telegram-bot-api library and the openweathermap API."
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
    const header = `<h2 class="mb-5" align="center">Personal Projects</h2>`;
    const reposTemplate = projects.map(({ name, description, url, languages, print }) =>
        `
                <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
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
                    </div>
                </div>
                <div class="border-top my-3"></div>

        `).join('')
    console.log(reposTemplate);
    const content = header + reposTemplate;
    education.innerHTML += content;
}

addInDoom();