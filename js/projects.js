const education = document.querySelector('#personal-projects');
let projects = [

    {
        name: "be the hero",
        url: "https://github.com/brunogeek9/be-the-hero",
        languages: "expo, react-native, node-js and axios.",
        print: "/img/profile_.jpeg",
        description: "project created within omiweak 11 with the aim of training knowledge while connecting people and ONGs in my region"
    },
    {
        name: "hackernews clone",
        url: "https://github.com/brunogeek9/hackernews-clone",
        languages: "vuejs and axios.",
        print: "/img/profile_.jpeg",
        description: "hackernews clone created with axios and vuejs."
    },
    {
        name: "task manager",
        languages: "PHP with cakephp",
        url: "https://github.com/brunogeek9/task_manager",
        print: "/img/profile_.jpeg",
        description: "Task manager web app implemented with cakephp + mysql + bootstrap 4 "
    },
    {
        name: "weather bot",
        url: "https://github.com/brunogeek9/weather-bot",
        languages: "JS",
        print: "/img/profile_.jpeg",
        description: "bot for the telegram implemented in nodejs with the node-telegram-bot-api library and the openweathermap API."
    },
    {
        name: "Gitfoot",
        url: "https://github.com/brunogeek9/weather-bot",
        languages: "Firebase, google maps api and android native api.",
        print: "/img/profile_.jpeg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum recusandae illum laudantium, sint libero numquam molestias ipsum nesciunt beatae asperiores quos laborum impedit omnis est voluptates, eligendi, veritatis obcaecati! Molestias."
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
                        <div class="subheading mb-3">${description}</div>
                        <p>Used in project: ${languages}</p>
                        <a href="${url}" target="_black">
                        <img src="${print}" alt="..." class="img-thumbnail" width="400px"
                        heidth="400px">
                        </a>
                    </div>
                    <div class="resume-date text-md-right">
                        
                    </div>
                </div>
            </div>
        
        `).join('')
    console.log(reposTemplate);
    education.innerHTML += reposTemplate
}

addInDoom();