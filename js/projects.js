let projects = [

    {
        name: "be the hero",
        url: "https://github.com/brunogeek9/be-the-hero",
        languages: "JS",
        description: "project created within omiweak 11 with the aim of training knowledge while connecting people and ONGs in my region"
    },
    {
        name: "hackernews clone",
        url: "https://github.com/brunogeek9/hackernews-clone",
        languages: "JS",
        description: "hackernews clone created with axios and vuejs."
    },
    {
        name: "task manager",
        languages: "PHP",
        url: "https://github.com/brunogeek9/task_manager",
        description: "Task manager web app implemented with cakephp + mysql + bootstrap 4 "
    },
    {
        name: "weather bot",
        url: "https://github.com/brunogeek9/weather-bot",
        languages: "JS",
        description: "bot for the telegram implemented in nodejs with the node-telegram-bot-api library and the openweathermap API."
    },
    {
        name: "Gitfoot",
        url: "https://github.com/brunogeek9/weather-bot",
        languages: "Java",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum recusandae illum laudantium, sint libero numquam molestias ipsum nesciunt beatae asperiores quos laborum impedit omnis est voluptates, eligendi, veritatis obcaecati! Molestias."
    },
]
console.log(projects);
const addInDoom = async() => {
    const reposTemplate = projects.map(({ name, description, url, languages }) =>
        `<div>${name}</div>`).join('')
    console.log(reposTemplate);
}

addInDoom();