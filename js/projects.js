const education = document.querySelector('#personal-projects');
let projects = [

    {
        name: "be the hero",
        url: "https://github.com/brunogeek9/be-the-hero",
        languages: "expo, react-native, node-js and axios.",
        print: {
            file: "/img/tela1.png",
            h: "400px",
            w: "700px"
        },
        description: "project created within omiweak 11 with the aim of training knowledge while connecting people and ONGs in my region."
    },
    {
        name: "task manager",
        languages: "PHP with cakephp",
        url: "https://github.com/brunogeek9/task_manager",
        print: {
            file: "",
            h: "600px",
            w: "200px"
        },
        description: "Task manager web app implemented with cakephp + mysql + bootstrap 4. "
    },
    {
        name: "weather bot",
        url: "https://github.com/brunogeek9/weather-bot",
        languages: "JS",
        print: {
            file: "/img/tela3.jpg",
            h: "500px",
            w: "300px"
        },
        description: "bot for the telegram implemented in nodejs with the node-telegram-bot-api library and the openweathermap API."
    },
    {
        name: "Gitfoot",
        url: "https://github.com/brunojamelli/GitfootOlheiro",
        languages: "Firebase, google maps api and android native api.",
        print: {
            file: "/img/tela4.jpeg",
            h: "500px",
            w: "300px"
        },
        description: "desc"
    },
]
console.log(projects);
const addInDoom = async() => {
    const header = `<h2 class="mb-5">Personal Projects</h2>`;
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
                        <img src="${print.file}" alt="..." style="width: ${print.w}; height: ${print.h}">
                        </a>
                    </div>
                </div>
                <hr>
            </div>
        
        `).join('')
    console.log(reposTemplate);
    education.innerHTML += reposTemplate
}

addInDoom();